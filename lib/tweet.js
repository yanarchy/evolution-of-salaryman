window.tweet = () => {
  var twitterModal = {
    button: '<center>Congratulations! You have finished!!!!</center><br><a style="margin: 0px auto" href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-dnt="true" data-count="none" data-text="At the @CodeChrysalis workshop and just finished the project!">Tweet</a>',
    script: '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'
  };

  window.picoModal(twitterModal.button);
  setTimeout(() => {
    $('body').append(twitterModal.script);
  }, 0);

};
