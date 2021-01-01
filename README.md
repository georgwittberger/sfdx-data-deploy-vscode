# SFDX Data Deploy for Visual Studio Code

> Extension to deploy/retrieve data to/from Salesforce

## Features

The extension adds support for the [SFDX Data Deploy Plugin](https://github.com/georgwittberger/sfdx-data-deploy-plugin).

- Write deployment descriptor files with JSON validation and code completion.
- Utilize code snippets for deployment descriptor files.
- Deploy data files in workspace folders to Salesforce using the command palette.
- Retrieve data files from Salesforce to workspace folders using the command palette.
- Deploy data files in workspace folders to Salesforce using the explorer context menu.
- Retrieve data files from Salesforce to workspace folders using the explorer context menu.

## Requirements

- Install [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli).
- Install [SFDX Data Deploy Plugin](https://github.com/georgwittberger/sfdx-data-deploy-plugin) (version 2.3.0 or higher)
- Connect Salesforce CLI to your Salesforce Org and set it as default org (e.g. using `-s` with the `force:auth` command).
- Open a workspace or folder in Visual Studio Code.

## Installation

Using the quick open menu (Ctrl+P / Cmd+P):

```
ext install georgwittberger.sfdx-data-deploy-vscode
```

## Usage

### Writing Deployment Descriptors

Create a JSON file and type the word `sfdx` or `datadeploy` to view a list of code snippets.

| Snippet                      | Description                                                        |
| ---------------------------- | ------------------------------------------------------------------ |
| `sfdx-datadeploy-descriptor` | Scaffold of a deployment descriptor with a blank jobs list         |
| `sfdx-datadeploy-job`        | Scaffold of a deployment job with placeholder for sObject name     |
| `sfdx-datadeploy-job-config` | Scaffold of a deployment job configuration (use inside job object) |

In the editor of a `datadeploy.json` file you will benefit from JSON validation and code completion. For example, press Ctrl+Space / Cmd+Space inside the job configuration objects to view a list of available configuration properties.

### Deploying from Data Files to Salesforce

Using the command palette (Ctrl+Shift+P / Cmd+Shift+P):

1. Open the command palette and type `sfdx data`.
2. Select the command `SFDX: Deploy Data To Org`.
3. Select the deployment directory from the displayed list.
4. Select the data files to deploy from the displayed list or press Enter right away to deploy all files.

Using the explorer context menu:

1. Right-click on a deployment directory in the explorer view.
2. Select `SFDX: Deploy Data From Folder To Org` from the context menu. This will deploy all data files in the folder.

### Retrieving from Salesforce to Data Files

Using the command palette (Ctrl+Shift+P / Cmd+Shift+P):

1. Open the command palette and type `sfdx data`.
2. Select the command `SFDX: Retrieve Data From Org`.
3. Select the deployment directory from the displayed list.
4. Select the data files to retrieve from the displayed list or press Enter right away to retrieve all files.

Using the explorer context menu:

1. Right-click on a deployment directory in the explorer view.
2. Select `SFDX: Retrieve Data From Org To Folder` from the context menu. This will retrieve all data files in the folder.

## Known Limitations

- SFDX commands are always run against your default org. If you have connected Salesforce CLI to multiple orgs make sure that the right one is set as default org.
- Explorer context menu items also appear for directories which do not contain any deployment descriptor. This is due to limitations of Visual Studio Code for controlling the visibility of menu items.

## License

[MIT](https://opensource.org/licenses/MIT)
