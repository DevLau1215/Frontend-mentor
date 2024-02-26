document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const progressBar = document.getElementById("progressBar");
    const progress = document.getElementById("progress");
    const circle = document.getElementById("circle");

    let filesUploaded = 0;

    fileInput.addEventListener("change", handleFileUpload);

    function handleFileUpload(event) {
        const files = event.target.files;
        if (files.length > 0 && filesUploaded < 10) {
            uploadFile(files[0]);
        }
    }

    function uploadFile(file) {
        filesUploaded++;
        const progressPercentage = filesUploaded * 10;
        updateProgressBar(progressPercentage);

        // Simular una carga de archivo 
        setTimeout(() => {
            if (filesUploaded < 10) {
                fileInput.value = ""; // Limpiar la entrada de archivos
            }
        }, 1000);
    }

    function updateProgressBar(percentage) {
        progress.style.width = percentage + "%";
        circle.style.left = "calc(" + percentage + "% - 6px)";
    }
});