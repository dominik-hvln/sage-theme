<?php

namespace Log1x\AcfComposer\Concerns;

use Illuminate\Support\Str;
use Log1x\AcfComposer\Partial;
use ReflectionClass;
use StoutLogic\AcfBuilder\FieldsBuilder;

trait InteractsWithPartial
{
    /**
     * Compose a field partial instance or file.
     *
     * @param  mixed  $partial
     * @return array
     *
     * @deprecated Use `addPartial()` on Builder instead.
     */
    protected function get($partial = null)
    {
        if (
            is_subclass_of($partial, Partial::class) &&
            ! (new ReflectionClass($partial))->isAbstract()
        ) {
            return $partial::make($this->composer)->compose();
        }

        if (is_a($partial, FieldsBuilder::class) || is_array($partial)) {
            return $partial;
        }

        if (file_exists($partial)) {
            return include $partial;
        }

        return file_exists(
            $partial = $this->app->path(
                Str::finish(
                    strtr($partial, ['.php' => '', '.' => '/']),
                    '.php'
                )
            )
        ) ? include $partial : [];
    }
}
