$(() => {
  const $openBtn = $("#openBio");

  const $modal = $("#modal");

  const $closeBtn = $("#close");

  const openBio = () => {
    $modal.css("display", "block");
  };

  $openBtn.on("click", openBio);

  const closeBio = () => {
    $modal.css("display", "none");
  };

  $closeBtn.on("click", closeBio);

  const $showProject = $("#projectBtn");
  const $showResume = $("#resumeBtn");
  const $showHome = $("#homeBtn")

  const $project = $("#projects");
  const $resume = $("#resume");
  const $home = $("#home")


  const openProject = () => {
    $resume.css("display", "none");
    $project.css("display", "block");
  };

  const openResume = () => {
    $project.css("display", "none");    
    $resume.css("display", "block");
  };

  const openHome = () => {
    $project.css("display", "none");    
    $resume.css("display", "none");
  }

  $showProject.on("click", openProject);
  $showResume.on("click", openResume);
  $showHome.on("click", openHome)
});
