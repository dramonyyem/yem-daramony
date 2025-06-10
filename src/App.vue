<script setup lang="ts">
import { ref } from 'vue';

// Rotation toggle state
const isRotated = ref(false);

const toggleTransform = () => {
  isRotated.value = !isRotated.value;
};
</script>

<template>
  <header>
    <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 ">
      <h1 class="text-[40px]">Portfolio</h1>

      <div class="w-full h-[100px]"></div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Left column -->
        <div class="w-5/10 mt-2">
          <div class="w-[350px]">
            <div class="text-[30px]">Hi, I'm Mony</div>
            <div class="text-[20px] py-2 font-bold">Software Developer</div>
            <div>2+ Years</div>
            <div>
              Projects consulting of web applications, mobile applications, and desktop applications.
            </div>
            <div class="h-[80px]"></div>
            <div>
              <button class="px-4 py-4 bg-gray-200 rounded-lg text-left">
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
        <div class="w-5/10 w-full bg-gray-100">
          <div class="rounded-lg h-[200px] ">
            <img
              class=""
              alt="Mony's photo"
            />
          </div>
        </div>
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
            <div class="flex items-center gap-2 bg-green-100 px-2 py-1 rounded-lg">
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
                <th class="border-b pb-2" width="250">Name</th>
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
                <td class="py-2">7</td>
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
                <td class="py-2">8</td>
              </tr>
              <tr>
                <td class="py-2">
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Vue.JS
                    </span>
                </td>
                <td class="py-2">8</td>
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
                <td class="py-2">8</td>
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
        <div class="grid grid-cols-4 gap-4">
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>

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
        <div class="grid grid-cols-5 gap-4">
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>

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
        <div class="grid grid-cols-5 gap-4">
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>
          <div class="w-full h-[200px] bg-gray-100 rounded-lg"></div>

        </div>
        <div class="mt-5">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
