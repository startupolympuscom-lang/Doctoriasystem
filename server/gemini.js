const MODEL = 'gemini-2.5-flash-image'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

/**
 * Sends a photo + editing instruction to Gemini's image model and returns
 * the generated image. This is a general-purpose image editor, not a
 * dental-trained model — callers must keep the "AI-generated preview, not a
 * clinical prediction" framing in the UI.
 */
export async function generateEditedImage({ imageBase64, mimeType, instruction }) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set — add it to .env')
  }

  const res = await fetch(`${ENDPOINT}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: instruction }, { inline_data: { mime_type: mimeType, data: imageBase64 } }],
        },
      ],
      generationConfig: {
        responseModalities: ['IMAGE'],
      },
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Gemini request failed (${res.status}): ${body.slice(0, 300)}`)
  }

  const json = await res.json()
  const candidate = json.candidates?.[0]

  if (candidate?.finishReason && candidate.finishReason !== 'STOP') {
    throw new Error(`Gemini declined to generate an image (${candidate.finishReason}).`)
  }

  const imagePart = candidate?.content?.parts?.find((p) => p.inline_data || p.inlineData)
  const inline = imagePart?.inline_data || imagePart?.inlineData
  if (!inline?.data) {
    const textPart = candidate?.content?.parts?.find((p) => p.text)?.text
    throw new Error(textPart || 'Gemini did not return an image for this request.')
  }

  return { imageBase64: inline.data, mimeType: inline.mime_type || inline.mimeType || 'image/png' }
}
