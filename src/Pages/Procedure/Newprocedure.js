import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { nanoid } from "nanoid";
import ShowNewProcedure from "./ShowNewProcedure";

const NewProcedure = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(true);
  const editorRef = useRef(null);
  return (
    <div>
      <div>
        <button onClick={() => setShowMyModal(true)}>SHOW</button>
        <br />
        <div>
          <Editor
            initialValue="Initial content"
            apiKey="au50u78j9vjabzcr4icg4v3oknubu08ifv9rfstawlzmdobp"
            init={{
              height: "90vh",
              menubar: true,
              selector: "textarea",
              plugins: [
                "visualblocks",
                "table",
                "advlist",
                "code",
                "image",
                "help",
                "preview",
                "link",
                "lists",
                "searchreplace",
                "media",
                "charmap",
                "blocks",
              ],
              toolbar:
                "undo redo | blocks | bold italic" +
                "bold italic | alignleft aligncenter alignright" +
                "help" +
                "bullist numlist outdent indent | image code table customInsertButton",
              image_advtab: true,
              image_title: true,
              automatic_uploads: true,
              file_picker_types: "image",
              file_picker_callback: function (cb, value, meta) {
                var input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");
                input.onchange = function () {
                  var file = this.files[0];

                  var reader = new FileReader();
                  reader.onload = function () {
                    var id = "blobid" + new Date().getTime();
                    var blobCache =
                      window.tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(",")[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
                    cb(blobInfo.blobUri(), { title: file.name });
                  };
                  reader.readAsDataURL(file);
                };
                input.click();
              },
              setup: function (editor) {
                editor.ui.registry.addButton("customInsertButton", {
                  icon: "edit-block",
                  tooltip: "Insert Input Element",
                  onAction: function (_) {
                    const value = nanoid(7);
                    editor.insertContent(
                      `&nbsp;<input type='text' id='value_${value}' name='value_${value}'>&nbsp;`
                    );
                  },
                });

                var toTimeHtml = function (date) {
                  return (
                    '<time datetime="' +
                    date.toString() +
                    '">' +
                    date.toDateString() +
                    "</time>"
                  );
                };

                editor.ui.registry.addButton("customDateButton", {
                  icon: "insert-time",
                  tooltip: "Insert Current Date",
                  disabled: true,
                  onAction: function (_) {
                    editor.insertContent(toTimeHtml(new Date()));
                  },
                  onSetup: function (buttonApi) {
                    var editorEventCallback = function (eventApi) {
                      buttonApi.setDisabled(
                        eventApi.element.nodeName.toLowerCase() === "time"
                      );
                    };
                    editor.on("NodeChange", editorEventCallback);

                    return function (buttonApi) {
                      editor.off("NodeChange", editorEventCallback);
                    };
                  },
                });
              },
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onInit={(evt, editor) => (editorRef.current = editor)}
          />
        </div>
      </div>
     <ShowNewProcedure onClose={handleOnClose} visible={showMyModal} /> 
    </div>
  );
};

export default NewProcedure;
