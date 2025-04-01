<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  onMount(() => {
    // Client-side redirect to first question
    goto('/work-dont-know-what-to-do');
  });
</script>

<div class="container">
  <div class="card">
    <h1>Welcome to Decision Helper</h1>
    <p>We'll help guide you through your decisions</p>
    <p class="redirect-notice">Redirecting you to the first question...</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    background: linear-gradient(45deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 2rem;
    box-sizing: border-box;
  }

  .card {
    background: white;
    border-radius: 16px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
    max-width: 600px;
    width: 100%;
  }

  h1 {
    color: #3f51b5;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .redirect-notice {
    color: #888;
    font-style: italic;
    margin-top: 2rem;
  }
</style>
