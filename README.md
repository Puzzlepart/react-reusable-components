# React Reusable Components

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
import { useConfirmationDialog } from 'react-reusable-components/lib/ConfirmDialog'
```

#### Using the hook

```JSX
const [dialog, getResponse] = useConfirmationDialog()

async function deleteItem() {
  let response = getResponse()
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
import { UserMessage } from 'react-reusable-components/lib/UserMessage'
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
      {message}
    </div>
)
```


