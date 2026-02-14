<script>
  import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';

  export let data;
</script>

<BlogPostLayout post={data.post} />
