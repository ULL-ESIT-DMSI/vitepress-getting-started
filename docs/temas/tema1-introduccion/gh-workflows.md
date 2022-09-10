#  gh workflows

A partir de la versión 1.9 tenemos el comando `gh workflow` para poder acceder a nuestros github workflows desde la terminal:

```
✗ gh --version
gh version 1.9.1 (2021-04-15)
https://github.com/cli/cli/releases/tag/v1.9.1
```

## gh workflow commands

```
✗ gh help workflow
List, view, and run workflows in GitHub Actions.

USAGE
  gh workflow <command> [flags]

CORE COMMANDS
  disable:    Disable a workflow
  enable:     Enable a workflow
  list:       List workflows
  run:        Run a workflow by creating a workflow_dispatch event
  view:       View the summary of a workflow

FLAGS
  -R, --repo [HOST/]OWNER/REPO   Select another repository using the [HOST/]OWNER/REPO format

INHERITED FLAGS
  --help   Show help for command

LEARN MORE
  Use 'gh <command> <subcommand> --help' for more information about a command.
  Read the manual at https://cli.github.com/manual
```

## gh workflow list

```
➜  please-Daniel-del-Castillo git:(main) ✗ gh workflow list
Test  active  8116703
```

## gh workflow view 

```
➜  please-Daniel-del-Castillo git:(main) ✗ gh workflow view
? Select a workflow Test (test.yaml)
Test - test.yaml
ID: 8116703

Total runs 21
Recent runs
✓  1.1.1                                                                Test  v1.1.1  push  755714052
✓  1.1.1                                                                Test  main    push  755713933
✓  Merge branch 'main' of github.com:ULL-ESIT-PL-2021/please-Daniel...  Test  main    push  755346331
✓  Update README.md                                                     Test  main    push  755342257
✓  Add a REPL                                                           Test  main    push  755328010

To see more runs for this workflow, try: gh run list --workflow test.yaml
To see the YAML for this workflow, try: gh workflow view test.yaml --yaml
```

```
➜  please-Daniel-del-Castillo git:(main) ✗ gh workflow view --help
View the summary of a workflow

USAGE
  gh workflow view [<workflow-id> | <workflow-name> | <filename>] [flags]

FLAGS
  -r, --ref string   The branch or tag name which contains the version of the workflow file you'd like to view
  -w, --web          Open workflow in the browser
  -y, --yaml         View the workflow yaml file

INHERITED FLAGS
      --help                     Show help for command
  -R, --repo [HOST/]OWNER/REPO   Select another repository using the [HOST/]OWNER/REPO format

EXAMPLES
  # Interactively select a workflow to view
  $ gh workflow view
  
  # View a specific workflow
  $ gh workflow view 0451

LEARN MORE
  Use 'gh <command> <subcommand> --help' for more information about a command.
  Read the manual at https://cli.github.com/manual
```

## gh workflow run

```
 ✗ gh help workflow run
Create a workflow_dispatch event for a given workflow.

This command will trigger GitHub Actions to run a given workflow file.  
The given workflow file must support a workflow_dispatch 'on' 
trigger in order to be run in this way.

If the workflow file supports inputs, they can be specified in a few ways:

- Interactively
- via -f or -F flags
- As JSON, via STDIN
 

USAGE
  gh workflow run [<workflow-id> | <workflow-name>] [flags]

FLAGS
  -F, --field key=value       Add a string parameter in key=value format, respecting @ syntax
      --json                  Read workflow inputs as JSON via STDIN
  -f, --raw-field key=value   Add a string parameter in key=value format
  -r, --ref string            The branch or tag name which contains the version of the workflow file you'd like to run

INHERITED FLAGS
      --help                     Show help for command
  -R, --repo [HOST/]OWNER/REPO   Select another repository using the [HOST/]OWNER/REPO format

EXAMPLES
  # Have gh prompt you for what workflow you'd like to run and interactively collect inputs
  $ gh workflow run
  
  # Run the workflow file 'triage.yml' at the remote's default branch
  $ gh workflow run triage.yml
  
  # Run the workflow file 'triage.yml' at a specified ref
  $ gh workflow run triage.yml --ref my-branch
  
  # Run the workflow file 'triage.yml' with command line inputs
  $ gh workflow run triage.yml -f name=scully -f greeting=hello
  
  # Run the workflow file 'triage.yml' with JSON via standard input
  $ echo '{"name":"scully", "greeting":"hello"}' | gh workflow run triage.yml --json

LEARN MORE
  Use 'gh <command> <subcommand> --help' for more information about a command.
  Read the manual at https://cli.github.com/manual
```

## Running Manually a Workflow


Set this workflow file:

```
➜  use-hello-world-javascript-action git:(master) cat .github/workflows/manual.yml
```

```yml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo "Hello ${{ github.event.inputs.name }}!"
        echo "- in ${{ github.event.inputs.home }}!"
```

This example defines the `name` and `home` inputs and prints them using the `github.event.inputs.name` and `github.event.inputs.home` contexts. If a home isn't provided, the default value `'The Octoverse'` is printed.

You can use the GitHub API to trigger a webhook event called `repository_dispatch` when you want to trigger a workflow for activity that happens outside of GitHub. 

For more information, see "[Create a repository dispatch event](https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event)."

To trigger the custom `repository_dispatch` webhook event, you must send a `POST` request to a GitHub API endpoint and provide an `event_type` name to describe the activity type. To trigger a workflow run, you must also configure your workflow to use the `repository_dispatch` event.

Now, using `gh` we can run it manually:

```
➜  use-hello-world-javascript-action git:(master) gh workflow run manual.yml -f name="PL at ULL" -f home="La Laguna"
✓ Created workflow_dispatch event for manual.yml at master

To see runs for this workflow, try: gh run list --workflow=manual.yml
```

```
➜  use-hello-world-javascript-action git:(master) gh run list --workflow=manual.yml
✓  .github  Manually triggered workflow  master  workflow_dispatch  758223539

For details on a run, try: gh run view <run-id>
```

```
➜  use-hello-world-javascript-action git:(master) gh run view 758223539
Refreshing run status every 3 seconds. Press Ctrl+C to quit.

✓ master Manually triggered workflow · 758227829
Triggered via workflow_dispatch less than a minute ago

JOBS
✓ say_hello in 1s (ID 2368935232)
  ✓ Set up job
  ✓ Run echo "Hello PL at ULL!"
  ✓ Complete job

✓ Run Manually triggered workflow (758227829) completed with 'success'
```
