import storage from '@react-native-firebase/storage';


export const uploadImageToStorage = async (path, imageName) => {
    let reference = storage().ref('profiles/'+imageName);         // 2
    let task = reference.putFile(path);               // 3
    return new Promise((resolve, reject) => { 
        task.then(async (response) => {                                 // 4
            const url = await storage().ref('profiles/'+imageName).getDownloadURL();
            console.log('Image uploaded to the bucket!');
            resolve({status: true, data: url}) 
        }).catch((e) =>{
            console.log('uploading image error => ', e)
            resolve({status: false, data: null}) 
        });
    })

    
} 