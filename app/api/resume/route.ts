import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), 'public', 'kamalsaitillarigenai9.pdf')
    const resumeContent = fs.readFileSync(resumePath)
    
    return new NextResponse(resumeContent, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Kamal_Sai_Tillari_Resume.pdf"'
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
