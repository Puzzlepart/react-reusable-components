# React Reusable Components [![version](https://img.shields.io/badge/version-0.1.0-green.svg)](https://semver.org)

## Installation

```shell
npm install pzl-react-reusable-components
```

## Components

### ConfirmDialog

Dialog used to confirm actions. Also contains React hook `useConfirmationDialog`.

#### Import

Import in the following way:

```typescript
import { useConfirmationDialog } from 'pzl-react-reusable-components/lib/ConfirmDialog'
```

#### Using the hook

```JSX
const [dialog, getResponse] = useConfirmationDialog()

async function deleteItem() {
  let response = getResponse({
    title: 'Delete item',
    subText: 'Are you sure you want to delete the item?'
  })
  if(response) {
    // Delete item
  }
}

return (
    <div>
      <div>
        <button text="Delete" onClick={deleteItem} />
      </div>
      {dialog}
    </div>
)
```

### UserMessage

Display a message to the user. Uses a `MessageBar` from `office-ui-fabric-react` and supports markdown using `react-markdown`.

#### Import

Import in the following way:

```typescript
import { UserMessage } from 'pzl-react-reusable-components/lib/UserMessage'
```

#### Using the hook

```JSX
const [message, setMessage] = useMessage(5000)

async function deleteItem() {
  setMessage({ text: 'Item was deleted' , type: MessageBarType.success })
}

return (
    <div>
      <div>
        <button text="Delete" onClick={deleteItem} />
      </div>
      {dialog}
    </div>
)
```

### Progress

Display progress to the user using the `ProgressIndicator` component from `office-ui-fabric-react`.

#### Import

Import in the following way:

```typescript
import { Progress } from 'pzl-react-reusable-components/lib/Progress'
```

#### Using the hook

```JSX
const [progress, startProgress, endProgress] = useProgress()

async function deleteItem() {
  startProgress('Deleting item', 'Please wait...')
  ....
  endProgress()
}

return (
    <div>
      <div>
        <button text="Delete" onClick={deleteItem} />
      </div>
      {progress}
    </div>
)
```



