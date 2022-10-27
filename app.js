async function main () {

    const model = await handpose.load();
    console.log("Model Loaded");

    video  = document.getElementById('videoInput');
    video.addEventListener("loadeddata", videoLoadedData);
    const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
          facingMode: 'user'
          // Only setting the video to a specified size in order to accommodate a
          // point cloud, so on mobile devices accept the default size.
        },
      });
    video.srcObject = stream;
    // const predictions = await model.estimateHands(document.querySelector("#videoInput"));

    async function videoLoadedData() {
        console.log("Video Loaded");
        const predictions = await model.estimateHands(document.querySelector("#videoInput"));
        console.log(predictions);

        requestAnimationFrame(videoLoadedData);
    }

}
main();