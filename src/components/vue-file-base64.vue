
<template>
  <input type="file" @change="onChange" :multiple="multiple" :accept="accept" />
</template>


<script>

  /*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
  * Licensed Under MIT (http://opensource.org/licenses/MIT)
  *
  * Vue File Base64 @ Version 1.0.0
  *
  * refs: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  */

  export default {

    props: {
      // Support Multiple File?
      multiple: {
        type: Boolean,
        default: false
      },
      // Pass the files info when it's done
      done: {
        type: Function,
        default: () => {}
      },
      accept: {
        type: String,
        default: 'image/*'
      }
    },

    methods: {
      onChange(e){

        // get the files
        let files = e.target.files;

        // Process each file
        var allFiles = []
        for (var i = 0; i < files.length; i++) {

          let file = files[i]
          console.log(file);
          console.log(file.name.split('.').pop());

          // Make new FileReader
          let reader = new FileReader()

          // Convert the file to base64 text
          reader.readAsDataURL(file)

          // on reader load somthing...
          reader.onload = () => {

            // Make a fileInfo Object
            let fileInfo = {
              fileName: file.name,
              fileType: file.type == "" ? file.name.split('.').pop().toLowerCase() : file.type,
              size: Math.round(file.size / 1000),
              fileData: reader.result,
              file: file
            }

            // Push it to the state
            allFiles.push(fileInfo)

            // If all files have been proceed
            if(allFiles.length == files.length){
              // Apply Callback function
              if(this.multiple) this.done(allFiles)
              else this.done(allFiles[0])
            }

          } // reader.onload

        } // for

      }, // onChange()

    }
  };

</script>
