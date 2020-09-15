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

