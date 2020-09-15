# React Reusable Components

## ConfirmDialog

Dialog used to confirm actions. Also contains React hook `useConfirmationDialog`.

### Import
Import in the following way:

```typescript
import { useConfirmationDialog } from 'react-reusable-components/lib/ConfirmDialog'
```

### Using the hook

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

