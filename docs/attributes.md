# Attributes

## Alpine Editor

On the ```<alpine-editor>``` element, you can set the following attributes:

#### ```data-editor-classes```
This attribute controls the classes which should be applied to the ProseMirror editor instance. That Instance is a div nested within your ```<div data-type="editor"></div>``` element.

#### ```data-ul-classes```

This attribute controls the classes which should be set on ```<ul></ul>``` elements when inserted.

#### ```data-ol-classes```

This attribute controls the classes which should be set on ```<ol></ol>``` elements when inserted.

#### ```data-li-classes```

This attribute controls the classes which should be set on ```<li></li>``` elements when inserted.

#### ```data-p-classes```

This attribute controls the classes which should be set on ```<p></p>``` elements when inserted.

#### ```data-bq-classes```

This attribute controls the classes which should be set on ```<blockquote></blockquote>``` elements when inserted.

#### ```data-pre-classes```

This attribute controls the classes which should be set on ```<pre></pre>``` (Code Blocks) elements when inserted.

#### ```data-h{n}-classes```

This attribute controls the classes which should be set on ```<h{1-6}></h{1-6}>``` elements when inserted.

## Menu Buttons

On your menu buttons you can set the following attributes:

#### ```data-active-classes```

This attribute controls which classes should be applied to the buttons, when they are active (e.g. on the strong button). These styles will also be set when the Editor detects, that the command of the command has been applied to the current selection.

#### ```data-level```

This attribute is used in combination with the ```heading``` command, in order to determine which header level should be inserted. Valid options are "1" to "6".