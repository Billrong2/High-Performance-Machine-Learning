# High-Performance-Machine-Learning
Since the whole DFL framework is huge, we decided to focus one of the steps, which is
the last step, the Face mask segmentation network optimization. The original method is to use
TernausNet or Xseg if we want to achieve it without huge resource consumption. We will try to
use VGG-16 or VGG-19 to enhance the segmentation in order to obtain a smoother edge while
face swap. The reason we try to use VGG-16 or VGG-19 is that the original Ternaus is U-net
with VGG-11 Encoder; in this case, we know that VGG-16 and VGG-19 are shown more
accurate than VGG-11. We are going to try to apply that to our code and see if we can bring
some optimization into our project.
