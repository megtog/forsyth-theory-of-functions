# Modern commentary on §§10–11

*This is a modern mathematical commentary on Forsyth's presentation, not a
replacement transcription. See `section-10.md` and `section-11.md` for the
scan-verified text.*

## The modern setting

A current textbook would write

$$
f(z)=u(x,y)+iv(x,y),\qquad z=x+iy,
$$

and use **holomorphic** where Forsyth speaks of “functionality” or functional
dependence on $z$. Assuming the relevant partial derivatives are continuous,
$f$ is holomorphic precisely when its real and imaginary parts satisfy the
Cauchy–Riemann equations

$$
u_x=v_y,\qquad u_y=-v_x.
$$

Sections 10 and 11 develop two sides of this fact:

- §10 starts with $u$ or $v$ and asks whether the other component can be
  reconstructed.
- §11 starts with a holomorphic expression $f(z)$ and studies the harmonic
  functions obtained by taking its real and imaginary parts.

The modern organizing concepts are **harmonic functions**, **harmonic
conjugates**, **analytic logarithms**, and, in the circle example, the
**Green function and Poisson kernel of a disk**.

## Section 10: harmonic conjugates

Differentiating the Cauchy–Riemann equations gives

$$
\Delta u=u_{xx}+u_{yy}=0,
\qquad
\Delta v=v_{xx}+v_{yy}=0.
$$

Thus the real and imaginary parts of a holomorphic function are harmonic. This
is the modern meaning of Forsyth's observation that neither part can be chosen
arbitrarily.

The converse needs a qualification that is mostly implicit in the historical
text. If $u$ is harmonic, a harmonic conjugate $v$ is determined locally by

$$
dv=-u_y\,dx+u_x\,dy.
$$

The form on the right is closed because

$$
\frac{\partial}{\partial y}(-u_y)
=\frac{\partial}{\partial x}(u_x)
\quad\Longleftrightarrow\quad
\Delta u=0.
$$

Consequently, on a simply connected domain one may define

$$
v(z)=v(z_0)+\int_{z_0}^{z}(-u_y\,dx+u_x\,dy),
$$

and the integral is independent of the path. On a domain with holes, a
harmonic conjugate can exist locally without existing as a single-valued
function globally. Saying only that $v$ is determined “except as to an
additive constant” is therefore globally valid when the domain has the needed
topology.

### Homogeneous polynomials

Forsyth's “integral function” in this passage is what a modern algebra text
would call a polynomial. Decomposing a harmonic polynomial into homogeneous
parts lets one find the conjugate degree by degree. If $u_m$ and $v_m$ are the
degree-$m$ real and imaginary parts, Euler's identity and the Cauchy–Riemann
equations give

$$
mv_m=x(v_m)_x+y(v_m)_y
=-x(u_m)_y+y(u_m)_x.
$$

Hence

$$
v_m=\frac1m\left(y(u_m)_x-x(u_m)_y\right),
$$

which is Forsyth's formula in current notation.

### The degree-zero case and topology

In polar coordinates, Forsyth writes

$$
u=b+a\theta,\qquad v=c-a\log r.
$$

This is best understood through a branch of the logarithm:

$$
u+iv=(b+ic)-ia\operatorname{Log}z.
$$

The angle $\theta=\arg z$ is not globally single-valued around the origin.
A modern textbook would therefore specify a slit domain, or another simply
connected region avoiding $0$, on which a branch of $\operatorname{Log}z$ has
been chosen. This is a concrete example of the global qualification above.

### Forsyth's substitution trick

Since $z=x+iy$, one has $x=z-iy$. Substituting $z-iy$ for $x$ in an expression
$u(x,y)+iv(x,y)$ is an algebraic way to test whether all dependence on $y$
cancels, leaving an expression in $z$ alone. A modern text might present this
as a useful recognition trick after checking the Cauchy–Riemann equations,
rather than as the general construction of a holomorphic function.

## Section 11: harmonic functions from holomorphic functions

The first examples are standard consequences of the complex logarithm. On a
domain where a branch is defined,

$$
\operatorname{Log}(z-a)=\log|z-a|+i\arg(z-a).
$$

It follows that both $\log|z-a|$ and $\arg(z-a)$ are harmonic away from $a$.
Likewise,

$$
\log\left|\frac{z-a}{z-b}\right|
=\log|z-a|-\log|z-b|
$$

is harmonic away from $a$ and $b$. In potential-theory language, it is the
potential produced by a source and a sink of equal strength.

The logarithm itself requires a branch, but its real part $\log|z-a|$ is
single-valued. The angular part is only locally single-valued unless the domain
prevents loops around $a$.

## The circle example in modern form

Let

$$
D_R=\{z:|z|<R\},\qquad c=re^{ia}\in D_R,
$$

and let

$$
c^*=\frac{R^2}{\overline c}=\frac{R^2}{r}e^{ia}
$$

be the inversion of $c$ in the circle $|z|=R$. Forsyth's $c'$ is this point
$c^*$. The function

$$
G(z,c)=\log\left|\frac{R(z-c)}{R^2-\overline c z}\right|
$$

is harmonic in $D_R\setminus\{c\}$, tends to $-\infty$ at $c$, and is zero on
$|z|=R$. Up to the choice of sign used by different authors, this is the Green
function of the disk with pole at $c$.

Forsyth uses

$$
u(z)=\log\left|\frac{z-c}{z-c^*}\right|.
$$

Because

$$
|z-c^*|=\frac{|R^2-\overline c z|}{r},
$$

the two normalizations differ only by a constant:

$$
G(z,c)=u(z)+\log\frac Rr.
$$

Thus they have the same derivatives and the same level curves. The sets

$$
\left|\frac{z-c}{z-c^*}\right|=\text{constant}
$$

are Apollonius circles. Forsyth computes their centers, radii, and the inward
normal derivative of $u$ directly. A modern treatment would often obtain the
same geometry from a Möbius transformation that sends the disk to the unit
disk and sends $c$ to $0$.

On the boundary, Forsyth's normal-derivative formula reduces to

$$
\frac{\partial G}{\partial n_{\mathrm{in}}}
=-\frac1R\,
\frac{R^2-r^2}{R^2-2Rr\cos(\psi-a)+r^2}.
$$

Apart from the normal orientation and normalization convention, the fraction
is the Poisson kernel for the disk. It gives the density with which boundary
values contribute to a harmonic function at the interior point $c$.

## How a modern text would classify the exercises

- **Exercise 1:** the triangle inequality and reverse triangle inequality for
  the complex modulus.
- **Exercise 2:** extracting real and imaginary coordinates from holomorphic
  or inverse functions, with attention to branches, and drawing the two
  orthogonal families $u=\text{constant}$ and $v=\text{constant}$.
- **Exercises 3–5:** testing the Cauchy–Riemann equations and constructing
  harmonic conjugates.
- **Exercise 6:** the Cauchy–Riemann equations for a local inverse. A modern
  statement would assume $f'(z)\ne0$, so that the inverse exists locally.
- **Exercise 7:** expressing an angle as a difference of arguments and hence
  as the real or imaginary part of a logarithmic function.
- **Exercise 8:** deciding when a composite $\phi(\lambda(x,y))$ is harmonic.
  The chain rule gives

  $$
  \Delta(\phi\circ\lambda)
  =\phi''(\lambda)|\nabla\lambda|^2+\phi'(\lambda)\Delta\lambda.
  $$

  Therefore the problem reduces to an ordinary differential equation for
  $\phi$ precisely when

  $$
  \frac{\Delta\lambda}{|\nabla\lambda|^2}
  $$

  depends only on $\lambda$.

## What has changed since Forsyth

The mathematical core is still standard. The largest difference is one of
organization and precision. A modern textbook would make domains and
regularity assumptions explicit, distinguish local from global harmonic
conjugates, introduce branches of the logarithm before using arguments, and
recognize the circle calculation as part of potential theory. Forsyth instead
develops these ideas computationally, with the geometry and formulas appearing
before the modern conceptual labels that now tie them together.
