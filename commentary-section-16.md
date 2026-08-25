# Modern commentary on §16

*This is a modern mathematical commentary on Forsyth's presentation, not a
replacement transcription. See `section-16.md` for the scan-verified text.*

## The theorem in modern language

Section 16 proves the planar form of **Green's theorem**. If $\Omega$ is a
sufficiently regular bounded region and $p,q$ have continuous first partial
derivatives on a neighborhood of $\Omega$, then

$$
\oint_{\partial\Omega}(p\,dx+q\,dy)
=\iint_\Omega
\left(\frac{\partial q}{\partial x}
-\frac{\partial p}{\partial y}\right)dx\,dy.
$$

The notation $\partial\Omega$ means the entire oriented boundary of the
region. “Positive direction” means that the region remains on the left as the
boundary is traversed. Thus an outer boundary is normally traversed
counterclockwise, while the boundary of a hole is traversed clockwise.

Forsyth calls the result a lemma because its purpose is to support the complex
integration theorems that follow. From a modern viewpoint, however, it is a
major theorem in its own right: it converts information throughout a
two-dimensional region into information along its one-dimensional boundary.

## Curl and circulation

The vector field associated with $p$ and $q$ is

$$
\mathbf F=(p,q).
$$

Then

$$
\oint_{\partial\Omega}(p\,dx+q\,dy)
$$

is the circulation of $\mathbf F$ around the boundary, and

$$
\frac{\partial q}{\partial x}-\frac{\partial p}{\partial y}
$$

is its scalar two-dimensional curl. Green's theorem therefore says

$$
\text{boundary circulation}
=\text{total curl inside the region}.
$$

This is the planar ancestor of Stokes' theorem. In the notation of
differential forms, set

$$
\omega=p\,dx+q\,dy.
$$

Its exterior derivative is

$$
d\omega=left(q_x-p_y\right)dx\wedge dy,
$$

and §16 becomes the compact identity

$$
\int_{\partial\Omega}\omega=\int_\Omega d\omega.
$$

The sign in Forsyth's formula is exactly the sign determined by the standard
orientation $dx\wedge dy$ of the plane.

## What Forsyth's diagram is doing

The complicated-looking Fig. 5 is designed to handle more than a rectangle.
The region can have an irregular outer boundary and several holes. A
horizontal line may enter and leave the region several times; a vertical line
may do the same.

Forsyth first integrates $q_x$ along horizontal slices. On each interval of a
slice, the fundamental theorem of calculus gives

$$
\int_{x_{mathrm{left}}}^{x_{mathrm{right}}}q_x(x,y)\,dx
=q(x_{mathrm{right}},y)-q(x_{mathrm{left}},y).
$$

The endpoints lie on the boundary. When these endpoint contributions are
integrated over $y$, they assemble into

$$
\iint_Omega q_x\,dx\,dy
=\oint_{\partial\Omega}q\,dy.
$$

He then uses vertical slices in the same way. The fundamental theorem gives
the endpoint values of $p$, but the orientation produces the opposite sign:

$$
\iint_Omega p_y\,dx\,dy
=-\oint_{\partial\Omega}p\,dx.
$$

Subtracting the second identity from the first gives Green's theorem.

A modern proof often begins with a region that is simple with respect to one
coordinate, proves one of these identities, and then decomposes a general
region into finitely many such pieces. Contributions along artificial
interior cuts occur twice with opposite orientations and cancel. Forsyth
encodes the same cancellation directly in the many labelled intersections of
his horizontal and vertical strips.

## Why holes have the opposite orientation

Suppose an annular region has an outer curve $C_0$ and an inner curve $C_1$.
Its positively oriented boundary is

$$
\partial\Omega=C_0-C_1,
$$

where both $C_0$ and $C_1$ are understood counterclockwise before the minus
sign is applied. Consequently,

$$
\int_{\partial\Omega}\omega
=\int_{C_0}\omega-\int_{C_1}\omega.
$$

This convention is forced by cancellation. If a region is cut into smaller
pieces, every new interior edge belongs to two pieces. One piece traverses it
in one direction and the neighboring piece traverses it in the other, so the
two line integrals cancel. The “keep the region on the left” rule makes this
automatic for both exterior and interior boundary components.

This orientation convention is used again in §§19–20 when Forsyth deforms a
large contour into small contours surrounding singularities.

## The regularity assumptions

Forsyth states that $p$ and $q$ are uniform, finite, and continuous, although
the formula also contains $p_y$ and $q_x$. A current elementary theorem would
usually assume

$$
p,q\in C^1(U)
$$

on an open set $U$ containing the closure of $\Omega$, and would require the
boundary to be piecewise smooth. These assumptions guarantee that the partial
derivatives exist and are continuous, that the double integral is defined,
and that the one-variable fundamental theorem can be applied along the
slices.

Green's theorem remains true under weaker hypotheses, but stating those
versions requires more machinery. For example, one can work with Lipschitz
boundaries and weak derivatives. Forsyth's proof should be read within the
classical smooth setting implicitly used by the integrations in the text.

His word “uniform” also has a historical meaning here. It means that $p$ and
$q$ are single-valued throughout the region: returning to a point by another
path does not produce another value. It does not mean uniform continuity or
uniform convergence.

## Why complex-valued functions cause no new difficulty

Forsyth proves the theorem first for real-valued $p$ and $q$. If

$$
p=p_1+ip_2,qquad q=q_1+iq_2,
$$

then both the boundary integral and the area integral split into real and
imaginary parts. Applying the real theorem to $(p_1,q_1)$ and $(p_2,q_2)$ and
then recombining proves the complex-valued version.

This is a general pattern: integration of a complex-valued function is
defined componentwise. The genuinely complex content enters in the next
section, when $p$ and $q$ are chosen from the real and imaginary parts of a
holomorphic function.

## The bridge to Cauchy's theorem

Write

$$
f(z)=u(x,y)+iv(x,y),qquad dz=dx+i\,dy.
$$

Then

$$
f(z)\,dz
=(u\,dx-v\,dy)+i(v\,dx+u\,dy).
$$

Green's theorem applied separately to the two real line integrals gives

$$
\oint_{\partial\Omega}f(z)\,dz
=\iint_\Omega(-v_x-u_y)\,dx\,dy
+i\iint_\Omega(u_x-v_y)\,dx\,dy.
$$

For a holomorphic function, the Cauchy–Riemann equations say

$$
u_x=v_y,qquad u_y=-v_x.
$$

Both area integrands therefore vanish, so

$$
\oint_{\partial\Omega}f(z)\,dz=0.
$$

That is the version of Cauchy's theorem proved in §17. Section 16 supplies the
real-variable engine; the Cauchy–Riemann equations make its two curl terms
zero.

Modern complex-analysis texts often prove Cauchy's theorem first under a
$C^1$ assumption by exactly this argument. They later give versions, such as
the Cauchy–Goursat theorem, which require only complex differentiability and
do not assume continuous first derivatives.

## Closed forms, exact forms, and topology

If

$$
q_x-p_y=0,
$$

Green's theorem shows that the integral of $p\,dx+q\,dy$ around the complete
boundary of every suitable subregion is zero. Locally, this means the form is
closed and can be written as

$$
p\,dx+q\,dy=dF
$$

for a potential $F$.

Globally, holes matter. On $\mathbb C\setminus\{0\}$, the form

$$
\frac{-y\,dx+x\,dy}{x^2+y^2}
$$

has zero curl away from the origin, but its integral around the unit circle is
$2\pi$. It is locally the differential of an angle, yet no single-valued
angle exists on the whole punctured plane. Thus “curl zero” implies global
path independence on simply connected regions, but not automatically on
regions with holes.

This distinction becomes central in complex analysis. A holomorphic function
has local antiderivatives, while the existence of a single-valued global
antiderivative depends on the domain and on integrals around its closed
curves.

## A small example

Take

$$
p(x,y)=-y,qquad q(x,y)=x.
$$

Then

$$
q_x-p_y=1-(-1)=2.
$$

For a positively oriented region $\Omega$, Green's theorem gives

$$
\oint_{\partial\Omega}(-y\,dx+x\,dy)
=2\operatorname{Area}(\Omega).
$$

Equivalently,

$$
\operatorname{Area}(\Omega)
=\frac12\oint_{\partial\Omega}(x\,dy-y\,dx).
$$

This familiar boundary formula for area is a concrete illustration of the
principle behind §16: a quantity distributed across an entire region can be
recovered from data along its boundary.

## How a modern textbook would organize §16

A present-day treatment would likely proceed as follows:

1. Define a bounded region with piecewise smooth, positively oriented
   boundary.
2. State Green's theorem for $C^1$ real-valued functions.
3. Prove it first for coordinate-simple regions using the one-variable
   fundamental theorem of calculus.
4. Extend it by decomposition, emphasizing cancellation on internal edges and
   clockwise orientation around holes.
5. Recast the theorem as circulation equals total curl, or as the
   two-dimensional case of Stokes' theorem.
6. Extend it componentwise to complex-valued functions.
7. Apply it to $f(z)\,dz$ and the Cauchy–Riemann equations to obtain Cauchy's
   theorem under classical smoothness assumptions.

Forsyth carries out essentially this program, but the geometric bookkeeping
is concentrated in one elaborate diagram and expressed through horizontal
and vertical boundary projections. Modern vector notation and differential
forms make the structure easier to see; his slicing argument remains the
core elementary proof.
