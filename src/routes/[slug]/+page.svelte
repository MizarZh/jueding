<script lang="ts">
  import { LocalStorage } from '$lib';
	import type { Card } from '$lib/types';

	export let data: { page: Card };

	$: currentPage = data.page;
	$: {
		if (currentPage) {
			LocalStorage.set('lastPage', currentPage.name);
		}
	}
</script>

<div class="container">
  <div class="card">
    <h1>{currentPage.content}</h1>
    {#if currentPage.link}
      <div class="options">
        {#each currentPage.link as option}
          <a href={`/${option.link}`} class="option-button">
            <button>{option.content}</button>
          </a>
        {/each}
      </div>
    {/if}
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
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 1.4;
  }

  .options {
    display: flex;
    gap: 2rem;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .option-button {
    text-decoration: none;
    width: 100%;
  }

  button {
    background: #3f51b5;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    cursor: pointer;
    width: 100%;
    transition: all 0.3s ease;
  }

  button:hover {
    background: #303f9f;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
