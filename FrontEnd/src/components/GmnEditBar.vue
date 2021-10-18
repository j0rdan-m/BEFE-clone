<template>
<body class="body-edit-bar">
    <div class="container">
        <!-- code here -->
        <div class="menu">
            <ul class="menu-list">
                <li class="menu-item"><button class="menu-button"><i data-feather="corner-up-right"></i>Share</button></li>
                <li class="menu-item"><button class="menu-button"><i data-feather="edit-2"></i>Rename</button></li>
            </ul>
            <ul class="menu-list">
                <li class="menu-item"><button class="menu-button menu-button--black"><i data-feather="circle"></i>No status<i data-feather="chevron-right"></i></button>
                    <ul class="menu-sub-list">
                        <li class="menu-item"><button class="menu-button menu-button--orange"><i data-feather="square"></i>Needs review</button></li>
                        <li class="menu-item"><button class="menu-button menu-button--purple"><i data-feather="octagon"></i>In progress</button></li>
                        <li class="menu-item"><button class="menu-button menu-button--green"><i data-feather="triangle"></i>Approved</button></li>
                        <li class="menu-item"><button class="menu-button menu-button--black menu-button--checked"><i data-feather="circle"></i>No status<i data-feather="check"></i></button></li>
                    </ul>
                </li>
                <li class="menu-item"><button class="menu-button"><i data-feather="link"></i>Copy Link Address</button></li>
                <li class="menu-item"><button class="menu-button"><i data-feather="folder-plus"></i>Move to</button></li>
                <li class="menu-item"><button class="menu-button"><i data-feather="copy"></i>Copy to</button></li>
                <li class="menu-item"><button class="menu-button"><i data-feather="lock"></i>Make Private</button></li>
                <li class="menu-item"><button class="menu-button"><i data-feather="download"></i>Download</button></li>
            </ul>
            <ul class="menu-list">
                <li class="menu-item"><button class="menu-button menu-button--delete"><i data-feather="trash-2"></i>Delete</button></li>
            </ul>
        </div>
    </div>
</body>
</template>

<script>
export default {
    name:"GmnEditBar"
};
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
}

:root {
  --color-bg-primary: #d0d6df;
  --color-bg-primary-offset: #f1f3f7;
  --color-bg-secondary: #fff;
  --color-text-primary: #3a3c42;
  --color-text-primary-offset: #898c94;
  --color-orange: #dc9960;
  --color-green: #1eb8b1;
  --color-purple: #657cc4;
  --color-black: var(--color-text-primary);
  --color-red: #d92027;
}

body {
  font-family: "Inter", sans-serif;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
}

.menu-list {
  margin: 0;
  display: block;
  width: 100%;
  padding: 8px;
}
.menu-sub-list {
  display: none;
  padding: 8px;
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  position: absolute;
  left: 100%;
  right: 0;
  z-index: 100;
  width: 100%;
  top: 0;
  flex-direction: column;
}

.menu-item {
  position: relative;
}

.menu-button {
  font: inherit;
  border: 0;
  padding: 8px 8px;
  padding-right: 36px;
  width: 100%;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--color-bg-secondary);

}

/* Codepen spesific styling - only to center the elements in the pen preview and viewport */
.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* End Codepen spesific styling */

</style>