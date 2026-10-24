var likeButton = document.querySelector('.like');

function playLikeAnimation() {
	document.body.classList.remove('liked');
	void document.body.offsetWidth;
	document.body.classList.add('liked');
}

likeButton.addEventListener('click', playLikeAnimation);
likeButton.addEventListener('keydown', function(event) {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		playLikeAnimation();
	}
});