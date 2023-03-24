function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName('profile'));
    for (const profile of profiles) {
        let button = profile.getElementsByTagName('button')[0];
        button.addEventListener('click', showInfo);
        function showInfo(e) {

            let radioButtonLock = e.target.parentElement.getElementsByTagName('input')[0];
            if (radioButtonLock.checked !== true) {
                if (button.textContent !== 'Hide it') {
                    profile.getElementsByTagName('div')[0].style = `display:block`;
                    button.textContent = 'Hide it';
                } else{
                    profile.getElementsByTagName('div')[0].style = `display:none`;
                    button.textContent = 'Show more';
                }
            }
        }
    }
}