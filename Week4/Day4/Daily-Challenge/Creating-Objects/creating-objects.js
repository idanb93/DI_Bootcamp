class Video {
    constructor(){
        this.videosDetails = [];
    }

    populateVideos(title, uploader, time){
        this.videosDetails.push( {title, time, uploader} );
    }

    watch(){
        for (let video of this.videosDetails){
            console.log(`${video['uploader']} watched all ${video['time']} of ${video['title']}`);

        }
    }
};

let video1 = new Video();
video1.populateVideos('Harry Potter and the Prisoner of Azkaban', 'RonaldWizley32', 8520);
video1.populateVideos('The Lord of the Rings: The Fellowship of the Ring', 'Gendalf11', 10680);
video1.populateVideos('The Matrix Revolutions', 'TheOne', 7740);
video1.populateVideos('Austin Powers: International Man of Mystery', 'MrEvil93', 5340);
video1.populateVideos('American Pie', 'Stiefler01', 5700);
console.log(video1.videosDetails);
