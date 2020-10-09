# Getting started

## Usage with Alpine.JS

The basic markup for the editor is really simple. 

```html
<div 
    x-data="{
        content: 'Lorem ipsum dolor sit amet'
    }" 
    class="bg-gray-200 border border-gray-900"
>
    <alpine-editor 
        x-model="content"
        data-h1-classes="text-xl"
    >
        <div data-type="menu">
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

        <div data-type="editor" class="p-2">
        </div>
    </alpine-editor>
</div>
```

Now you have a working editor containing 4 actions:

- Bold/Strong
- Emphasize
- Code
- H1

All of the classes can be ignored/swapped! These are only included to get you starting and show you how it works.

Please have a look at the [Commands](/commands) section to see all available commands for the editor and their options.