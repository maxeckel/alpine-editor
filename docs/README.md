# AlpineEditor

AlpineEditor is a simple WYSIWYG editor created to be easily usable with [Alpine.JS](https://github.com/alpinejs/alpine) and [Laravel Livewire](https://laravel-livewire.com).

## Why?

There are many great editors out there (including CKEditor, TinyMCE, Trix etc.), but I wanted an editor which is more declarative.  
Declarative like Alpine.JS and easily stylable with e.g. TailwindCSS.

It should be an editor which fits into the [TALL stack](https://tallstack.dev).


## How?

AlpineEditor is based on the awesome [ProseMirror](https://prosemirror.net) project.  
[ProseMirror](https://prosemirror.net) itself is not an editor, it is more like a framework to create WYSIWYG editors for the web.  
If you are ever in the need to create a custom WYSIWYG editor, check it out! It's simply amazing!

The Editor registers a Web/Custom Component. This Component is used to set up the Editor instance "internally" and removes the need to  
use Alpines x-init hook.