const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button")

const fetchFile = (url)=>{
    fetch(url).then(res => res.blob()).then(data =>{
        let tempUrl = URL.createObjectURL(data);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        // document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerText = "Download File"
    }).catch(()=>{
        downloadBtn.innerText = "Download File"
        alert("Failed To download file")
    })
}
downloadBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    downloadBtn.innerText = "Downloading File...";
    fetchFile(fileInput.value);
})