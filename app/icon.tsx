import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0F19',
          borderRadius: '10px',
          border: '1.5px solid #00F2FF',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: 8, left: 10, right: 10, height: 2.5, background: '#00F2FF', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: 16, left: 10, right: 14, height: 2.5, background: '#00F2FF', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: 24, left: 10, right: 18, height: 2.5, background: '#00F2FF', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: 18, right: 7, width: 5, height: 8, background: '#059669', opacity: 0.8, borderRadius: 1 }} />
      </div>
    ),
    { ...size }
  )
}
