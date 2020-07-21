export function checkWebmSupport() {
    let video = document.createElement('video');
    return video.canPlayType('video/webm; codecs="vp8, vorbis"') === 'probably';
}
