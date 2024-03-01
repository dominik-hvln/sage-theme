<div class="{{ $block->classes }} md:container md:mx-auto" style="{{ $block->inlineStyle }}">
  @if ($items)
    <div class="splide post__splide" aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          @foreach ($items as $item)
            <li class="splide__slide">
              <x-post-card postID="{{ $item['item']->ID }}"></x-post-card>
            </li>
          @endforeach
        </ul>
      </div>
    </div>
  @else
    <p>{{ $block->preview ? 'Add an item...' : 'No items found!' }}</p>
  @endif
</div>
