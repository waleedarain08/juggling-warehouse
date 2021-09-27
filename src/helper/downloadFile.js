import RNFetchBlob from 'rn-fetch-blob'

const { config, fs } = RNFetchBlob

export const downloadFile = (url) => {
    let PictureDir = fs.dirs.DownloadDir // this is the pictures directory. You can check the available directories in the wiki.
    let date = new Date()
    let options = {
    fileCache: true,
    addAndroidDownloads : {
        useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
        notification : true,
        path:  PictureDir + "/juggline_warehouse/vd_"+Math.floor(date.getTime() + date.getSeconds() / 2)+".mp4", // this is the path where your downloaded file will live in
        description : 'Downloading Video.'
    }
    }
    console.log("url", url)
    config(options).fetch('GET', url)
    .then((res) => {
        // do some magic here
        console.log("image download response", res)
    })
    .catch((err) => {
        console.log("image download error", err)
    })

}


export const getDownloadCount = async () => {

    var TRACK_FOLDER = RNFetchBlob.fs.dirs.DownloadDir + '/juggline_warehouse/';
    try {
        const files = await RNFetchBlob.fs.ls(TRACK_FOLDER)
        console.log('Files list in TRACK_FOLDER = ', files);
        return files
    } catch (error) {
        console.log('Error in Files list in TRACK_FOLDER = ', error);
    }

}

export const getImage = async () => {
    var IMAGE_FOLDER = RNFetchBlob.fs.dirs.DCIMDir+"/Camera";
    console.log("RNFetchBlob.fs.dirs.PictureDir", RNFetchBlob.fs.dirs.DownloadDir)
    try {
        const files = await RNFetchBlob.fs.ls(IMAGE_FOLDER)
        console.log('Files list in IMAGE_FOLDER = ', files);
        return files
    } catch (error) {
        console.log('Error in Files list in IMAGE_FOLDER = ', error);
    }
}