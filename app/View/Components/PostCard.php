<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class PostCard extends Component
{
    public $postID;
    public $image;
    public $title;
    public $excerpt;
    public $link;
    public $date;

    /**
     * Create a new component instance.
     */
    public function __construct($postID)
    {
        $this->postID = $postID;
        $this->image = get_the_post_thumbnail($postID, 'medium_large');;
        $this->title = get_the_title($postID);
        $this->excerpt = get_the_excerpt($postID);
        $this->link = get_permalink($postID);
        $this->date =  human_time_diff(get_the_date('U', $postID), current_time('timestamp')) . " " . __('ago');;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.post-card');
    }
}
