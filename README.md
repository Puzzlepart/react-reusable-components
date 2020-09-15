# React Reusable Components

## ConfirmDialog

Dialog used to confirm actions. Also contains React hook `useConfirmationDialog`.

### Using the hook

```typescript
const [dialog, getResponse] = useConfirmationDialog()

async function deleteItem() {
  let response = getResponse()
  if(response) {
    // Delete item
  }
}

return (
    <div>
  			<item>
  				<button text="Delete" onClick={deleteItem} />
  			</item>
        {dialog}
    </div>
)
```

