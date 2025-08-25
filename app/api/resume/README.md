# Resume Download API
This API endpoint provides resume download functionality.

## Usage
- GET /api/resume - Returns the HTML resume
- GET /api/resume/download - Downloads the resume as PDF

## Implementation
The resume is available in multiple formats:
- HTML version at /Kamal_Sai_Tillari_Resume.html
- Future PDF version can be generated server-side

## Notes
- For production, consider using a PDF generation library like puppeteer
- Current implementation serves the HTML version for immediate use
