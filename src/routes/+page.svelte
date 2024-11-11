<script>
	import Card from '$lib/components/Card.svelte';
</script>

<div class="container mx-auto flex justify-center px-4 py-4">
	<div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
		<Card title="latest-jobs" name="Latest jobs" link="./latest-jobs" } />
		<Card title="results" name="Results" link="results" />
		<Card title="syllabus" name="Syllabus" link="syllabus" />
	</div>
	<!-- <div class="flex justify-end">
        <NewsCard />
    </div> -->
</div>
<div class="container mx-auto flex justify-center px-4 py-4">
	<div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
		<Card title="home" />
		<Card title="home" />
		<Card title="home" />
	</div>
</div>

<!--
<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="grid grid-cols-3 gap-8">
		<!-- Row 1 -->
<!-- <Card />
		<Card />
		<Card />

		<!-- Row 2 -->
<!-- <Card />
		<Card />
		<Card />
	</div>
</div> -->
