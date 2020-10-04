# Getting started

## Usage with Alpine.JS

The basic markup for the editor is really simple. 

```html
<div 
    x-data="{
        editorConfig: { 
            editorClasses: 'focus:outline-none',
            content: 'Dummy',
        }
    }" 
    x-init="
        new AlpineEditor($refs.editor, $refs.editorMenu, editorConfig);
    " 
    class="bg-gray-200 border border-gray-900"
>
    <div x-ref="editorMenu" class="relative z-0 inline-flex shadow-sm rounded-md">
        <button 
            type="button" 
            data-command="strong" 
            data-active-class="bg-blue-400" 
            class="bg-gray-500"
        >
            Bold
        </button>
        <button 
            type="button" 
            data-command="em" 
            data-active-class="bg-blue-400" 
            class="bg-gray-500"
        >
            Emphasize
        </button>
        <button 
            type="button" 
            data-command="code" 
            data-active-class="bg-blue-400" 
            class="bg-gray-500"
        >
            Code
        </button>
        <button 
            type="button" 
            data-command="heading" 
            data-level="1"
            data-active-class="bg-blue-400" 
            class="bg-gray-500"
        >
            H1
        </button>
    </div>

    <div x-ref="editor" class="p-2">
    </div>
</div>
```

Now you have a working editor containing 4 actions:

- Bold/Strong
- Emphasize
- Code
- H1

All of the classes can be ignored/swapped! These are only included to get you starting and show you how it works.

Please have a look at the [Commands](/commands) section to see all available commands for the editor and their options.