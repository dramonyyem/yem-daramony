<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Modal from './components/Modal.vue';


// Rotation toggle state
const isRotated = ref(false);
const showModal = ref(false);

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const repository = ref<Repo[]>([]);
const toggleTransform = () => {
  isRotated.value = !isRotated.value;
};
const displayModal = () => {
  showModal.value = true;
};

const fetchData = async () => {
  const url = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_KEY;
  try { 
    const response = await fetch(url, {
          headers: {
            Authorization: `token ${token}` // 🔴 Don't expose real tokens in production
          }
    });
    const data = await response.json();
    repository.value = data;
    // console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <header>
    <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 ">
      <!-- <h1 class="text-[40px]">Portfolio</h1> -->

      <div class="w-full h-[100px]"></div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Left column -->
         <div class="w-5/10 w-full bg-gray-100">
          <div class="rounded-lg h-[200px] ">
            <img
              class=""
              alt="Mony's photo"
            />
          </div>
        </div>
        <div class="w-5/10 mt-2">
          <div class="w-[350px]">
            <div class="text-[30px]">Hi, I'm Mony</div>
            <div class="text-[20px] py-2 font-bold">Fullstack Developer</div>
            <div>2+ Years</div>
            <div>
              Projects consulting of web applications, mobile applications, and desktop applications.
            </div>
            <div class="h-[80px]"></div>
            <div>
              <button @click="displayModal" class="px-4 py-4 text-white hover:bg-gray-500 bg-blue-800 rounded-lg text-left">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                  </svg>
                  <span>Contact</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Right column -->
        
      </div>
    </div>
  </header>

  <main>
    <div class="h-[150px]"></div>

    <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      <h2 class="text-[30px]">SKILL SETS</h2>

      <div class="mt-[60px]">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
            <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
            <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
          </svg>
          <span>Skill Sets</span>
        </div>

        <hr class="mt-5 mb-2" />

        <!-- Toggleable Section -->
          <button @click="toggleTransform">
            <div class="flex items-center gap-2 bg-blue-100 px-2 py-1 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  :class="[
                    'bi bi-caret-right-fill transition-transform duration-300 ease-in-out',
                    isRotated ? 'rotate-90' : ''
                  ]"
                  viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
              </div>
              <div class="text-[20px] ">
                Programming Languages & Skills
              </div>
            </div>
          </button>


        <!-- Skills Table -->
        <div class="mt-5">
          <table class="w-full text-left border-collapse" :class="{'hidden': !isRotated}">
            <thead>
              <tr>
                <th class="border-b pb-2" width="200">Name</th>
                <th class="border-b pb-2">Expert Level (1–10)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2">
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      PHP
                    </span>
                </td>
                <td class="py-2">
                  <div class="flex items-center gap-2">
                    <div class="h-2 bg-gray-500 rounded" style="width: 100%">
                      <div class="h-2 bg-blue-500 rounded" style="width: 80%">
                        
                      </div>
                    </div>
                    (8)
                  </div>

                </td>
              </tr>
              <tr>
                <td class="py-2">
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      JavaScript
                    </span>
                </td>
                <td class="py-2">
                  <div class="flex items-center gap-2">
                    <div class="h-2 bg-gray-500 rounded" style="width: 100%">
                        <div class="h-2 bg-blue-500 rounded" style="width: 70%"> 
                        </div>
                      </div>
                      (7)
                  </div>
                </td>
              </tr>
              <tr>
                <td class="py-2">
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Python
                    </span>
                </td>
                <td class="py-2">
                  <div class="flex items-center gap-2">
                    <div class="h-2 bg-gray-500 rounded" style="width: 100%">
                        <div class="h-2 bg-blue-500 rounded" style="width: 60%"> 
                        </div>
                      </div>
                      (6)
                  </div>
                </td>
              </tr>
              <tr>
                <td class="py-2">
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Tailwind CSS
                    </span>
                </td>
                <td class="py-2">
                  <div class="flex items-center gap-2">
                    <div class="h-2 bg-gray-500 rounded" style="width: 100%">
                        <div class="h-2 bg-blue-500 rounded" style="width: 60%"> 
                        </div>
                      </div>
                      (6)
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      <h2 class="text-[30px]">Companies</h2>

      <div class="mt-[60px]">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
          </svg>
          <span>Companies</span>
        </div>

        <hr class="mt-5 mb-2" />
        <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          <div class="w-full h-[200px] shadow-xl/20 rounded-lg hover:bg-blue-800 hover:text-white">
            <div class="p-4">
                <h3 class="text-lg font-bold">Grep Tech Cambodia Co., LTD</h3>
                <!-- <p class="text-sm text-gray-600">{{ repo.description || 'No description available' }}</p> -->
                <div class="">2023 - 2024</div>
              </div>
          </div>
          <div class="w-full h-[200px] shadow-xl/20 rounded-lg hover:bg-blue-800 hover:text-white">
            <div class="p-4">
                <h3 class="text-lg font-bold">Ecamshopping</h3>
                <!-- <p class="text-sm text-gray-600">{{ repo.description || 'No description available' }}</p> -->
                <div class="">2020 - 2021</div>
              </div>
          </div>

        </div>
        <div class="mt-5">
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      <h2 class="text-[30px]">Projects</h2>

      <div class="mt-[60px]">
        <div class="flex items-center gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
          </svg>
          <span>Projects</span>
        </div>

        <hr class="mt-5 mb-2" />
        <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6" >
          <div class="w-full h-[200px] shadow-xl/20 rounded-lg hover:bg-blue-800 hover:text-white" v-for="repo in repository" :key="repo.id">
            <a :href="repo.html_url" target="_blank" class="block h-full">
              <div class="p-4">
                <h3 class="text-lg font-bold">{{ repo.name }}</h3>
                <!-- <p class="text-sm text-gray-600">{{ repo.description || 'No description available' }}</p> -->
                <div class="hover:underline">View on GitHub</div>
              </div>
            </a>
          </div>

        </div>
        <div class="mt-5">
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      <h2 class="text-[30px]">Education</h2>

      <div class="mt-[60px]">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
            <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
          </svg>
          <span>Education</span>
        </div>

        <hr class="mt-5 mb-2" />
        <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          <div class="w-full h-[200px] shadow-xl/20 rounded-lg hover:bg-blue-800 hover:text-white">
            <div class="p-4" >
              <a href="https://www.setecu.com" target="_blank" class="block h-full">
                <h3 class="text-lg font-bold">SETEC Institute</h3>
                <!-- <p class="text-sm text-gray-600">{{ repo.description || 'No description available' }}</p> -->
                <div>2019 - 2023</div>
              </a>
            </div>
          </div>

        </div>
        <div class="mt-5">
        </div>
      </div>
    </div>
  </main>
  <Modal v-model="showModal">
    <h2>
      <div class="flex items-center gap-2">
        <a href="https://www.linkedin.com/in/yem-dara-mony-71b440200/" class="hover:text-blue-500" target="_blank">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            linkedin
          </div>
        </a>
      </div>
    </h2>
    <h2>
      <a href="https://github.com/dramonyyem" class="hover:text-blue-500" target="_blank"> 
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
              GitHub
          </div>
        </div>
      </a>
    </h2>
  </Modal>
</template>

<style scoped>
</style>
