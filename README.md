
# Google Sheets onEdit Script

This repository contains a Google Apps Script function `onEdit` designed to enhance Google Sheets with automated data processing capabilities. The script captures edits made to the sheet, retrieves relevant data, and sends it to an external API endpoint for further processing.

## Features

- **Event-Driven Execution**: Automatically triggers upon any cell edit in the Google Sheet.
- **Comprehensive Data Capture**:
  - Retrieves the entire row of data corresponding to the edited cell.
  - Combines row data with column headers from the second row to form a structured data object.
- **User Identification**: Captures the email address of the user who made the edit.
- **API Integration**: Sends a POST request with the structured data and user information to a specified API endpoint.
- **Robust Error Handling**: Logs errors that occur during API requests for easy debugging and maintenance.

## Usage Scenarios

- **Data Synchronization**: Sync edited data in Google Sheets with external databases or services.
- **Change Tracking**: Maintain a log of changes along with user information to monitor and audit edits.
- **Automated Workflows**: Trigger notifications, data processing tasks, or other workflows based on changes made to the sheet.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   ```

2. **Deploy the Script**:
   - Open your Google Sheet.
   - Navigate to Extensions > Apps Script.
   - Copy and paste the `onEdit` function script into the Apps Script editor.
   - Save and deploy the script.

3. **Configuration**:
   - Update the API endpoint URL and any necessary authentication tokens in the script.
   - Ensure the second row of your sheet contains the appropriate column headers.

## Contribution Guidelines

- Fork the repository.
- Create a new branch (`feature/your-feature-name`).
- Commit your changes and push to the branch.
- Open a Pull Request describing your changes.



## Contact

For any questions or suggestions, please open an issue or contact [your email].

---

Feel free to adjust the details like repository URL, email, and license information according to your needs.
