<script lang="ts">
	import type { Card } from '$lib/types';
	import { defaultPages } from '$lib/types';
	import { LocalStorage } from '$lib/storage';
	let { children } = $props();

	let showEditor = $state(false);
	let editorContent = $state('');
	let currentPage = '';

	function openEditor() {
		// Get current page content from LocalStorage or empty string
		currentPage = window.location.pathname;
		const pages: Record<string, Card> = LocalStorage.get('pages') || defaultPages;
		editorContent = typeof pages === 'string' ? pages : '';
		showEditor = true;
	}

	function saveContent() {
		if (editorContent.trim()) {
			LocalStorage.set('pages', editorContent);
		} else {
			LocalStorage.remove('pages');
		}
		showEditor = false;
	}
</script>

{@render children()}

<!-- Floating Edit Button -->
<button onclick={openEditor} class="edit-button" aria-label="Edit page"> ✏️ </button>

<!-- Editor Modal -->
{#if showEditor}
	<div class="editor-modal">
		<div class="editor-container">
			<textarea
				bind:value={editorContent}
				class="editor-textarea"
				placeholder="Edit page content..."
			></textarea>
			<div class="editor-actions">
				<button onclick={() => (showEditor = false)} class="editor-cancel"> Cancel </button>
				<button onclick={saveContent} class="editor-save"> Save </button>
			</div>
		</div>
	</div>
{/if}

<style>
	.edit-button {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		padding: 0.75rem;
		background-color: #3b82f6;
		color: white;
		border-radius: 9999px;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.edit-button:hover {
		background-color: #2563eb;
	}

	.edit-button:focus {
		outline: none;
		box-shadow: 0 0 0 2px #93c5fd;
	}

	.editor-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		z-index: 50;
	}

	.editor-container {
		background-color: white;
		border-radius: 0.5rem;
		padding: 1rem;
		width: 100%;
		max-width: 42rem;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
	}

	.editor-textarea {
		width: 100%;
		flex: 1;
		padding: 0.5rem;
		border: 1px solid #e5e7eb;
		border-radius: 0.25rem;
		margin-bottom: 0.5rem;
		min-height: 200px;
	}

	.editor-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}

	.editor-cancel {
		padding: 0.5rem 1rem;
		border: 1px solid #e5e7eb;
		border-radius: 0.25rem;
		background: none;
		cursor: pointer;
	}

	.editor-cancel:hover {
		background-color: #f3f4f6;
	}

	.editor-save {
		padding: 0.5rem 1rem;
		background-color: #3b82f6;
		color: white;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
	}

	.editor-save:hover {
		background-color: #2563eb;
	}
</style>
