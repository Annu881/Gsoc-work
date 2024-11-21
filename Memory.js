let selectedImage = null;

function selectImage(imageId) {
    selectedImage = imageId;
    document.getElementById("message").textContent = "";


}

function checkMatch(fruitName) {
    if (selectedImage) {
        if (selectedImage === fruitName) {
            document.getElementById("message").textContent = "Correct Match";
        } else {
            document.getElementById("message").textContent = "Wrong Match";
        }
    } else {
        document.getElementById("message").textContent = "Please select an image first";
    }
}