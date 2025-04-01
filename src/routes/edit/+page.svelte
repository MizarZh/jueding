<script lang="ts">
	import { LocalStorage } from '$lib';
	import { goto } from '$app/navigation';
	import type { Card, CardLink } from '$lib/types';

	const defaultPages = {
		'work-dont-know-what-to-do': {
			name: 'work-dont-know-what-to-do',
			content: "Want to work, but don't know what to do?",
			link: [
				{ content: 'yes', link: 'study' },
				{ content: 'no', link: 'sleep' }
			]
		},
		study: { name: 'study', content: 'Go study' },
		sleep: { name: 'sleep', content: 'Go sleep' }
	};

	let pages = (LocalStorage.get('pages') as Card) || {};
	pages = { ...defaultPages, ...pages };

	let currentSlug = '';
	let currentPage = {
		name: '',
		content: '',
		link: [] as CardLink[]
	};

	let newOption = {
		content: '',
		link: ''
	};

	function loadPage() {
		if (currentSlug && pages[currentSlug]) {
			currentPage = JSON.parse(JSON.stringify(pages[currentSlug]));
		} else {
			currentPage = {
				name: currentSlug,
				content: '',
				link: []
			};
		}
	}

	function addOption() {
		if (newOption.content && newOption.link) {
			currentPage.link.push({ ...newOption });
			newOption = { content: '', link: '' };
		}
	}

	function removeOption(index: number) {
		currentPage.link.splice(index, 1);
	}

	function savePage() {
		pages[currentPage.name] = currentPage;
		LocalStorage.set('pages', pages);
		goto(`/${currentPage.name}`);
	}
</script>

<div class="edit-container">
	<h1>Edit Page</h1>

	<div class="form-group">
		<label for="page-slug">Page Slug:</label>
		<input id="page-slug" bind:value={currentSlug} on:change={loadPage} />
	</div>

	<div class="form-group">
		<label for="page-content">Page Content:</label>
		<textarea id="page-content" bind:value={currentPage.content} rows="3"></textarea>
	</div>

	<h2>Options</h2>
	{#each currentPage.link as option, i}
		<div class="option">
			<span>{option.content} → {option.link}</span>
			<button on:click={() => removeOption(i)}>Remove</button>
		</div>
	{/each}

	<div class="new-option">
		<input bind:value={newOption.content} placeholder="Option text" />
		<input bind:value={newOption.link} placeholder="Link to page slug" />
		<button on:click={addOption}>Add Option</button>
	</div>

	<button class="save-btn" on:click={savePage}>Save Page</button>
</div>

<style>
	.edit-container {
		max-width: 800px;
		margin: 2rem auto;
		padding: 2rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	textarea {
		min-height: 100px;
	}

	.option {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
		background: #f5f5f5;
		border-radius: 4px;
	}

	.new-option {
		display: flex;
		gap: 1rem;
		margin: 1rem 0;
	}

	.new-option input {
		flex: 1;
	}

	button {
		padding: 0.5rem 1rem;
		background: #3f51b5;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background: #303f9f;
	}

	.save-btn {
		display: block;
		width: 100%;
		padding: 1rem;
		margin-top: 2rem;
		font-size: 1.1rem;
	}
</style>
