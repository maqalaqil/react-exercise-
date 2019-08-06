(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{502:function(e,n,t){"use strict";t.r(n);var r,i,o,a,u,c,s,d,f,l,g,h,p,m,v,_=monaco.Promise,b=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return function(e){var n,t,r=new _(function(e,r){n=e,t=r},function(){});return e.then(n,t),r}(this._getClient().then(function(n){e=n}).then(function(e){return n._worker.withSyncedResources(t)}).then(function(n){return e}))},e}();!function(e){e.create=function(e,n){return{line:e,character:n}},e.is=function(e){var n=e;return B.objectLiteral(n)&&B.number(n.line)&&B.number(n.character)}}(r||(r={})),function(e){e.create=function(e,n,t,i){if(B.number(e)&&B.number(n)&&B.number(t)&&B.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")},e.is=function(e){var n=e;return B.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}}(i||(i={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&(B.string(n.uri)||B.undefined(n.uri))}}(o||(o={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return B.number(n.red)&&B.number(n.green)&&B.number(n.blue)&&B.number(n.alpha)}}(a||(a={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return i.is(n.range)&&a.is(n.color)}}(u||(u={})),function(e){e.create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},e.is=function(e){var n=e;return B.string(n.label)&&(B.undefined(n.textEdit)||p.is(n))&&(B.undefined(n.additionalTextEdits)||B.typedArray(n.additionalTextEdits,p.is))}}(c||(c={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(s||(s={})),function(e){e.create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return B.defined(t)&&(o.startCharacter=t),B.defined(r)&&(o.endCharacter=r),B.defined(i)&&(o.kind=i),o},e.is=function(e){var n=e;return B.number(n.startLine)&&B.number(n.startLine)&&(B.undefined(n.startCharacter)||B.number(n.startCharacter))&&(B.undefined(n.endCharacter)||B.number(n.endCharacter))&&(B.undefined(n.kind)||B.string(n.kind))}}(d||(d={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return B.defined(n)&&o.is(n.location)&&B.string(n.message)}}(f||(f={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(l||(l={})),function(e){e.create=function(e,n,t,r,i,o){var a={range:e,message:n};return B.defined(t)&&(a.severity=t),B.defined(r)&&(a.code=r),B.defined(i)&&(a.source=i),B.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&B.string(n.message)&&(B.number(n.severity)||B.undefined(n.severity))&&(B.number(n.code)||B.string(n.code)||B.undefined(n.code))&&(B.string(n.source)||B.undefined(n.source))&&(B.undefined(n.relatedInformation)||B.typedArray(n.relatedInformation,f.is))}}(g||(g={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return B.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.title)&&B.string(n.command)}}(h||(h={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return B.objectLiteral(n)&&B.string(n.newText)&&i.is(n.range)}}(p||(p={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return B.defined(n)&&w.is(n.textDocument)&&Array.isArray(n.edits)}}(m||(m={})),function(e){e.is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||B.typedArray(n.documentChanges,m.is))}}(v||(v={}));var y,w,k,x,C,E,I,T,S,M,P,R,F,L,A,O,j,D=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(p.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(p.replace(e,n))},e.prototype.delete=function(e){this.edits.push(p.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var t=new D(e.edits);n._textEditChanges[e.textDocument.uri]=t}):e.changes&&Object.keys(e.changes).forEach(function(t){var r=new D(e.changes[t]);n._textEditChanges[t]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(w.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var n=e;if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new D(i),this._textEditChanges[n.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new D(i),this._textEditChanges[e]=r}return r}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.uri)}}(y||(y={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.uri)&&B.number(n.version)}}(w||(w={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.uri)&&B.string(n.languageId)&&B.number(n.version)&&B.string(n.text)}}(k||(k={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(x||(x={})),function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(x||(x={})),function(e){e.is=function(e){var n=e;return B.objectLiteral(e)&&x.is(n.kind)&&B.string(n.value)}}(C||(C={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(E||(E={})),function(e){e.PlainText=1,e.Snippet=2}(I||(I={})),function(e){e.create=function(e){return{label:e}}}(T||(T={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(S||(S={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return B.string(n)||B.objectLiteral(n)&&B.string(n.language)&&B.string(n.value)}}(M||(M={})),function(e){e.is=function(e){var n=e;return B.objectLiteral(n)&&(C.is(n.contents)||M.is(n.contents)||B.typedArray(n.contents,M.is))&&(void 0===e.range||i.is(e.range))}}(P||(P={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(R||(R={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return B.defined(n)&&(i.documentation=n),B.defined(t)?i.parameters=t:i.parameters=[],i}}(F||(F={})),function(e){e.Text=1,e.Read=2,e.Write=3}(L||(L={})),function(e){e.create=function(e,n){var t={range:e};return B.number(n)&&(t.kind=n),t}}(A||(A={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(O||(O={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(j||(j={}));var W,V,K,N,H,U=function(){return function(){}}();!function(e){e.create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var n=e;return n&&B.string(n.name)&&B.string(n.detail)&&B.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.deprecated||B.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(U||(U={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(W||(W={})),function(e){e.create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},e.is=function(e){var n=e;return B.defined(n)&&B.typedArray(n.diagnostics,g.is)&&(void 0===n.only||B.typedArray(n.only,B.string))}}(V||(V={})),function(e){e.create=function(e,n,t){var r={title:e};return h.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r},e.is=function(e){var n=e;return n&&B.string(n.title)&&(void 0===n.diagnostics||B.typedArray(n.diagnostics,g.is))&&(void 0===n.kind||B.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||h.is(n.command))&&(void 0===n.edit||v.is(n.edit))}}(K||(K={})),function(e){e.create=function(e,n){var t={range:e};return B.defined(n)&&(t.data=n),t},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&(B.undefined(n.command)||h.is(n.command))}}(N||(N={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return B.defined(n)&&B.number(n.tabSize)&&B.boolean(n.insertSpaces)}}(H||(H={}));var z=function(){return function(){}}();!function(e){e.create=function(e,n,t){return{range:e,target:n,data:t}},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&(B.undefined(n.target)||B.string(n.target))}}(z||(z={}));var q,J;!function(e){e.create=function(e,n,t,r){return new Q(e,n,t,r)},e.is=function(e){var n=e;return!!(B.defined(n)&&B.string(n.uri)&&(B.undefined(n.languageId)||B.string(n.languageId))&&B.number(n.lineCount)&&B.func(n.getText)&&B.func(n.positionAt)&&B.func(n.offsetAt))},e.applyEdits=function(e,n){for(var t=e.getText(),r=function e(n,t){if(n.length<=1)return n;var r=n.length/2|0,i=n.slice(0,r),o=n.slice(r);e(i,t),e(o,t);for(var a=0,u=0,c=0;a<i.length&&u<o.length;){var s=t(i[a],o[u]);n[c++]=s<=0?i[a++]:o[u++]}for(;a<i.length;)n[c++]=i[a++];for(;u<o.length;)n[c++]=o[u++];return n}(n,function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t}),i=t.length,o=r.length-1;o>=0;o--){var a=r[o],u=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Ovelapping edit");t=t.substring(0,u)+a.newText+t.substring(c,t.length),i=u}return t}}(q||(q={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(J||(J={}));var B,Q=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);for(;t<i;){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(B||(B={}));var $=monaco.Range,G=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),this._disposables.push(t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(t){return t.doValidation(e.toString()).then(function(t){var r=t.map(function(e){return function(e,n){var t="number"==typeof n.code?String(n.code):n.code;return{severity:function(e){switch(e){case l.Error:return monaco.MarkerSeverity.Error;case l.Warning:return monaco.MarkerSeverity.Warning;case l.Information:return monaco.MarkerSeverity.Info;case l.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}(0,e)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),n,r)})}).then(void 0,function(e){console.error(e)})},e}();function X(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Y(e){if(e)return{start:X(e.getStartPosition()),end:X(e.getEndPosition())}}function Z(e){if(e)return new $(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ee(e){var n=monaco.languages.CompletionItemKind;switch(e){case E.Text:return n.Text;case E.Method:return n.Method;case E.Function:return n.Function;case E.Constructor:return n.Constructor;case E.Field:return n.Field;case E.Variable:return n.Variable;case E.Class:return n.Class;case E.Interface:return n.Interface;case E.Module:return n.Module;case E.Property:return n.Property;case E.Unit:return n.Unit;case E.Value:return n.Value;case E.Enum:return n.Enum;case E.Keyword:return n.Keyword;case E.Snippet:return n.Snippet;case E.Color:return n.Color;case E.File:return n.File;case E.Reference:return n.Reference}return n.Property}function ne(e){if(e)return{range:Z(e.range),text:e.newText}}var te=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){e.getWordUntilPosition(n);var r=e.uri;return se(t,this._worker(r).then(function(e){return e.doComplete(r.toString(),X(n))}).then(function(e){if(e){var n=e.items.map(function(e){var n={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:ee(e.kind)};return e.textEdit&&(n.range=Z(e.textEdit.range),n.insertText=e.textEdit.newText),e.insertTextFormat===I.Snippet&&(n.insertText={value:n.insertText}),n});return{isIncomplete:e.isIncomplete,items:n}}}))},e}();var re=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return se(t,this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),X(n))}).then(function(e){if(e)return e.map(function(e){return{range:Z(e.range),kind:function(e){var n=monaco.languages.DocumentHighlightKind;switch(e){case L.Read:return n.Read;case L.Write:return n.Write;case L.Text:return n.Text}return n.Text}(e.kind)}})}))},e}(),ie=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,n){var t=e.uri;return se(n,this._worker(t).then(function(e){return e.findDocumentLinks(t.toString())}).then(function(e){if(e)return e.map(function(e){return{range:Z(e.range),url:e.target}})}))},e}();function oe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var ae=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return se(t,this._worker(r).then(function(e){return e.format(r.toString(),null,oe(n)).then(function(e){if(e&&0!==e.length)return e.map(ne)})}))},e}(),ue=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var i=e.uri;return se(r,this._worker(i).then(function(e){return e.format(i.toString(),Y(n),oe(t)).then(function(e){if(e&&0!==e.length)return e.map(ne)})}))},e}(),ce=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return se(t,this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(n.kind=function(e){switch(e){case s.Comment:return monaco.languages.FoldingRangeKind.Comment;case s.Imports:return monaco.languages.FoldingRangeKind.Imports;case s.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),n})}))},e}();function se(e,n){return n.cancel&&e.onCancellationRequested(function(){return n.cancel()}),n}function de(e){var n=new b(e),t=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new te(t)),monaco.languages.registerDocumentHighlightProvider(r,new re(t)),monaco.languages.registerLinkProvider(r,new ie(t)),monaco.languages.registerFoldingRangeProvider(r,new ce(t)),"html"===r&&(monaco.languages.registerDocumentFormattingEditProvider(r,new ae(t)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new ue(t)),new G(r,t,e))}t.d(n,"setupMode",function(){return de})}}]);
//# sourceMappingURL=51.bundle.js.map