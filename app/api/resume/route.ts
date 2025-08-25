import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), 'public', 'Kamal_Sai_Tillari_Resume.html')
    const resumeContent = fs.readFileSync(resumePath, 'utf8')
    
    return new NextResponse(resumeContent, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': 'inline; filename="Kamal_Sai_Tillari_Resume.html"'
      }
    })
  } catch (error) {
    console.error('Error serving resume:', error)
    return NextResponse.json(
      { error: 'Resume not found' },
      { status: 404 }
    )
  }
}
