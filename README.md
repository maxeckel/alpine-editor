# AlpineEditor

The AlpineEditor is a simple WYSIWYG HTML Editor, with the use in Alpine.JS and Livewire in mind.
It is based on [Prosemirror](https://prosemirror.net/) which is a solid foundation for any kind of Editor.

## Why another WYSIWYG Editor?

Well, there are many Editors out there. Including CKEditor, TinyMCE, Trix etc. but with the spirit of Alpine. JS!  

While all the previously mentioned Editors are great, for me they provide way too much "boilerplate".  
For CK and Tiny you need to create Themes when you want to customize them, you need to provide configs etc. 

What I wanted is to be more "declarative". With AlpineEditor you simply create a `div` and put `button`s in it, which have a `data-command` attribute. You are ready to go. You can style it with e.g. TailwindCSS as you wish, without the need for overriden complex Editor CSS.

You can even use Alpine.JS (or JS in general) to create Dropdown or something within the Toolbar.

## How does it work?

First of all include the AlpineEditor via CDN:

```
<script src="https://cdn.jsdelivr.net/gh/maxeckel/alpine-editor@0.1.0/dist/alpine-editor.min.js"></script>
```

When this is done you can use Alpine.JS to initialize an Editor instance:

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

In this exmaple, we simply create an Editor instance within x-init and pass it 3 Params:

- $refs.editor: This is a simple x-ref to the Editors wrapper, in which it will initialize itself.
- $refs.menu: This is a simple x-ref to the Editors Menu wrapper, all Button within this wrapper (defining `data-command`) will be initialized with their respective action.
- editorConfig: This is a simple Object, containing classes which should be applied to the Editor Markup and the content of the Editor. This is synced when the Editor state changes, so you could use @entangle when using Livewire. 

With this you are good to go! You have an (unstyled) Editor which "Bold", "Emphasize" and "Code" actions.


## Available Commands

The following commands are available for use at the moment:

| Type              | Value         | Additional `data` Attributes  | Explenation  |
| ----------------- |:-------------:| -----------------------------:| ------------------------------------------------------:|
| Bold/Strong       | strong        | /                             | /                                                      |
| Emphasize         | em            | /                             | /                                                      |
| Code              | code          | /                             | /                                                      |
| Ordered List (ol) | ordered_list  | /                             | /                                                      |
| Bullet List (ul)  | bullet_list   | /                             | /                                                      |
| Lift              | lift          | /                             | Lifts the selected node up in the DOM                  |
| Join Up           | join_up       | /                             | Joins the node with the one above (if possible)        |
| Join Down         | join_down     | /                             | Joins the node with the one underneath (if possible)   |
| Heading           | heading       | `data-level="1"`              | Changes the node to a heading with the specified level |
| Paragraph         | paragraph     | /                             | Changes the current node to a Paragraph                |
| Blockquote        | blockquote    | /                             | Changes the current node to a Blockquote               |
| Code Block        | code_block    | /                             | Changes the current node to a Code block               |

## Additonal `data` Attributes

| Attribute         | Explenation                                                   |
| ----------------- | -------------------------------------------------------------:|
| data-active-class | Applies the given classes to the buttons when they are active |


## License

Copyright © 2020 Max Eckel and contributors

Licensed under the MIT license, see LICENSE.md for details.