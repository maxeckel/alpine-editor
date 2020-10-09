# AlpineEditor

The AlpineEditor is a simple WYSIWYG HTML Editor, with the use in Alpine.JS and Livewire in mind.
It is based on [Prosemirror](https://prosemirror.net/) which is a solid foundation for any kind of Editor.

## Why another WYSIWYG Editor?

Well, there are many Editors out there, including CKEditor, TinyMCE, Trix etc. but they miss all the spirit of Alpine.JS!  

While all the previously mentioned Editors are great, for me they provide way too much "boilerplate".  
For CK and Tiny you need to create Themes when you want to customize them etc. 

What I wanted is to be more "declarative". With AlpineEditor you simply define two `div`s, one for the Editor itself and one for the Menu. In the Menu `div` you simply add Buttons with a `data-command` attribute, which defines what the Button should do, clicked. You have kind of full control over the markup and style it with ease (e.g. with TailwindCSS) without having to think about more or less complex CSS provided by the Editor to override.

You can even use Alpine.JS (or JS in general) to create Dropdown or something within the Toolbar.

## How does it work?

Please see the [Documentation](https://maxeckel.github.io/alpine-editor/) for installation details and usage instructions.


Here you can see a simple setup:

```html
<div 
    x-data="{
        content: 'Lorem ipsum dolor sit amet'
    }" 
    class="bg-gray-200 border border-gray-900"
>
    <alpine-editor x-model="content">
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

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Max Eckel](https://github.com/MaxEckel)
- [All Contributors](../../contributors)

## License

Copyright © 2020 Max Eckel and contributors

Licensed under the MIT license, see LICENSE.md for details.