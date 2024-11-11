<script>
	import { goto } from '$app/navigation';
	let { title = '', name = 'Name is not given', data = [], link = '', onclick = null } = $props();
	const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	function handleClick(title, id = 1) {
		goto(`./${title}/${id}`);
	}
</script>

<div
	class="h-108 mb-8 w-96 max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800"
>
	<h5 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
		{name}
	</h5>
	<ul class="space-y-3 overflow-y-auto">
		{#each index as i}
			<li>
				<button
					onclick={() => handleClick(title, i)}
					class="block text-blue-600 hover:underline dark:text-blue-400"
				>
					Data Url is not provided
				</button>
			</li>
		{/each}
	</ul>
	<div class="mt-4">
		<a href={link} class="font-medium text-blue-600 hover:underline dark:text-blue-400">Read more</a
		>
	</div>
</div>
