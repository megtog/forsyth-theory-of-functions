# Modern commentary on §§14–15

*This is a modern mathematical commentary on Forsyth's presentation, not a
replacement transcription. See `section-14.md` and `section-15.md` for the
scan-verified text.*

## The modern setting

Sections 14 and 15 introduce contour integration and establish its first
formal properties. They also pause to review convergence of infinite series,
because later arguments will integrate series term by term.

A modern textbook would usually begin with a parametrized contour

$$
\gamma:[a,b]\longrightarrow\mathbb C
$$

that is continuously differentiable, or piecewise continuously
differentiable. If $f$ is continuous on the image of $\gamma$, its contour
integral is defined by

$$
\int_\gamma f(z)\,dz
=\int_a^b f(\gamma(t))\gamma'(t)\,dt.
$$

This converts a complex contour integral into an ordinary integral of a
complex-valued function of one real variable. Equivalently, if
$f=u+iv$ and $z=x+iy$, then

$$
f(z)\,dz=(u\,dx-v\,dy)+i(v\,dx+u\,dy).
$$

Thus the contour integral can be defined using two real line integrals.

The central ideas in the two sections are:

- a contour integral depends on an oriented path, not normally just on its
  endpoints;
- reversing or joining paths gives the expected algebraic rules;
- the size of an integral is bounded by the length of the path times the
  largest size of the integrand;
- uniform convergence is the condition that makes passage from a series to
  its integral safe.

## Section 14: the contour integral

Forsyth defines the integral by sums of the form

$$
\sum_{k=0}^{n} (z_{k+1}-z_k)f(z_k),
$$

where $z_0=a$, $z_{n+1}=z$, and the intermediate points occur successively
along the curve. This is the contour version of a Riemann sum. In modern
language, one requires the mesh of the partition—the largest distance between
successive parameter values—to tend to zero. Merely increasing the number of
points would not by itself be enough.

The parametrized definition makes several details explicit:

- the curve should have enough regularity for its length and tangent to make
  sense;
- an orientation is part of the contour;
- the value is unchanged by a sufficiently regular, orientation-preserving
  reparametrization;
- continuity of $f$ on the contour is a standard sufficient condition for
  integrability.

Forsyth says that a curve should avoid any infinity of $f$ in its vicinity. A
modern statement would simply specify that $f$ is defined and continuous on
the image of the contour. A singularity near the contour causes no problem if
it does not lie on the contour, though it can become important when one later
deforms the path.

### Why the path matters

The notation

$$
\int_a^z f(\zeta)\,d\zeta
$$

can conceal the path. In general, two curves with the same endpoints can give
different answers. For example, a positively oriented circuit around the
origin gives

$$
\int_{|z|=1}\frac{dz}{z}=2\pi i,
$$

whereas a path that goes out and returns without winding around the origin has
integral zero.

Path independence is therefore a theorem requiring additional hypotheses,
not part of the definition. Later sections obtain it for holomorphic functions
on suitable domains. A modern textbook often writes $\int_\gamma f(z)\,dz$
until path independence has been established.

## The convergence interlude

The discussion of infinite series in §14 may feel like a digression, but it
prepares for §15(V), where integration and infinite summation are interchanged.

### The Cauchy criterion

Forsyth's condition

$$
\left|a_{n+1}+a_{n+2}+\dots+a_{n+r}\right|<\epsilon
$$

for all sufficiently large $n$ and all positive $r$ is now called the
**Cauchy criterion**. It says that the partial sums become arbitrarily close to
one another. Because $\mathbb C$ is complete, this condition is equivalent to
convergence.

### Absolute and conditional convergence

A series $\sum a_n$ is absolutely convergent when

$$
\sum |a_n|<\infty.
$$

Absolute convergence permits arbitrary rearrangement without changing the
sum. Conditional convergence means that $\sum a_n$ converges but
$\sum|a_n|$ does not.

Forsyth's statement that a conditionally convergent series can be rearranged
to have any assigned sum is correct for a conditionally convergent series of
real numbers, in the sense of the Riemann rearrangement theorem. It requires
qualification for genuinely complex series. For instance, a series whose
terms are all real cannot be rearranged to acquire a non-real sum. The modern
theory describes the possible sums of rearrangements as an affine subspace of
the underlying real vector space.

### Pointwise and uniform convergence

For a series of functions

$$
\sum_{n=1}^{\infty} f_n(z),
$$

pointwise convergence allows the index after which a tail is small to depend
on $z$. Uniform convergence requires a single index to work throughout the
whole region:

$$
\sup_{z\in E}
\left|\sum_{\nu=n}^{\infty}f_\nu(z)\right|
\longrightarrow 0.
$$

This difference is crucial. Uniform convergence controls the error everywhere
at once, which is exactly what is needed to pass a limit through an integral
over a fixed finite contour.

Forsyth notes correctly that uniform convergence and absolute convergence are
different properties: neither implies the other in full generality. A useful
stronger condition is **uniform absolute convergence**, often proved with the
Weierstrass M-test.

### Power series

For a power series

$$
\sum_{n=0}^{\infty}a_nz^n,
$$

there is a radius of convergence $R$. The series converges absolutely for
$|z|<R$ and diverges for $|z|>R$; behavior on $|z|=R$ must be examined
separately. It need not converge uniformly on the entire open disk $|z|<R$,
but it converges uniformly on every smaller closed disk

$$
|z|\leq r<R.
$$

Modern complex analysis strengthens the differentiation statement made in
§14. A locally uniformly convergent series of holomorphic functions has a
holomorphic sum, and its derivatives also converge locally uniformly. For
arbitrary differentiable real or complex functions, uniform convergence of
the original series alone does not justify term-by-term differentiation;
standard sufficient hypotheses include uniform convergence of the derivative
series together with convergence at one point. Mere pointwise convergence of
the derivatives is not enough.

## Section 15: algebra of paths

Forsyth's first three properties are now expressed with operations on
oriented contours. If $\gamma_1$ ends where $\gamma_2$ begins, then

$$
\int_{\gamma_1*\gamma_2}f(z)\,dz
=\int_{\gamma_1}f(z)\,dz+\int_{\gamma_2}f(z)\,dz.
$$

If $-\gamma$ denotes the same path with its orientation reversed, then

$$
\int_{-\gamma}f(z)\,dz=-\int_\gamma f(z)\,dz.
$$

Linearity gives

$$
\int_\gamma(af+bg)\,dz
=a\int_\gamma f\,dz+b\int_\gamma g\,dz.
$$

These statements follow immediately from the parametrized real-integral
definition. They also explain why contours can be split into convenient
pieces and why oppositely oriented pieces cancel.

## The ML estimate hidden in §15(IV)

Forsyth proves that an integral of a finite continuous function along a path
of finite length is finite. Today the argument is normally stated as the
**ML estimate** (or estimation lemma): if $\gamma$ has length $L$ and

$$
|f(z)|\leq M\qquad(z\in\gamma),
$$

then

$$
\left|\int_\gamma f(z)\,dz\right|\leq ML.
$$

Indeed,

$$
\begin{aligned}
\left|\int_\gamma f(z)\,dz\right|
&=\left|\int_a^b f(\gamma(t))\gamma'(t)\,dt\right|\\
&\leq\int_a^b|f(\gamma(t))|\,|\gamma'(t)|\,dt\\
&\leq M\int_a^b|\gamma'(t)|\,dt\\
&=ML.
\end{aligned}
$$

Forsyth calls $M$ a “superior limit.” If $f$ is continuous and the contour is
compact, $|f|$ actually attains a maximum, so one can take

$$
M=\max_{z\in\gamma}|f(z)|.
$$

The ML estimate is one of the basic working tools of complex analysis. It is
used to show that integrals over shrinking arcs or very large circles tend to
zero and to control errors when contours or integrands are approximated.

## The Hermite–Darboux mean-value form

Forsyth rewrites the estimate in the form

$$
I=\lambda Lf(\xi),
\qquad |\lambda|<1,
$$

for some point $\xi$ of the path. The factor $\lambda$ absorbs both the loss
in the triangle inequality and the change of complex direction among the
values being added.

The modern non-strict triangle inequality naturally gives $|\lambda|\leq1$,
not always $|\lambda|<1$. Equality can occur, for example, when the integrand
has a constant direction along a straight path. Forsyth's strict inequality
should therefore be read as a bound by unity rather than as the exclusion of
the equality case.

This should not be mistaken for a direct complex analogue of the real
mean-value theorem. In general there need not be a point $\xi$ such that

$$
\int_\gamma f(z)\,dz=f(\xi)\int_\gamma dz.
$$

Complex values can point in different directions and cancel. Modern texts
therefore emphasize the ML estimate, which gives the useful quantitative
content without suggesting a stronger mean-value property.

## Uniform convergence and term-by-term integration

Suppose the partial sums

$$
S_n(z)=\sum_{m=0}^{n}u_m(z)
$$

converge uniformly to $f(z)$ on a contour $\gamma$ of finite length $L$.
Applying the ML estimate to the remainder gives

$$
\begin{aligned}
\left|
\int_\gamma f(z)\,dz-
\sum_{m=0}^{n}\int_\gamma u_m(z)\,dz
\right|
&=\left|\int_\gamma(f-S_n)(z)\,dz\right|\\
&\leq L\sup_{z\in\gamma}|f(z)-S_n(z)|.
\end{aligned}
$$

The supremum on the right tends to zero by uniform convergence. Consequently,

$$
\int_\gamma\sum_{m=0}^{\infty}u_m(z)\,dz
=\sum_{m=0}^{\infty}\int_\gamma u_m(z)\,dz.
$$

This is §15(V) in modern notation. The essential hypothesis is uniform
convergence on the contour, not specifically the existence of a circle of
convergence. For a power series, a contour lying in a smaller closed disk
$|z|\leq r<R$ automatically has the required uniform convergence.

## How a modern textbook would organize the material

A current introductory treatment would likely present the ideas in this
order:

1. Define piecewise smooth oriented contours and their length.
2. Define $\int_\gamma f(z)\,dz$ by parametrization.
3. Prove concatenation, reversal, and linearity.
4. Prove the ML estimate.
5. Introduce pointwise and uniform convergence separately.
6. Use the ML estimate to justify term-by-term integration.
7. Treat power series as the most important application, with uniform
   convergence on compact subsets of their disk of convergence.

Forsyth reaches essentially the same core results, but his presentation mixes
the general theory of series into the initial definition of integration and
uses the language of “finite lines,” “superior limits,” and “continuous
convergence.” Modern notation makes the role of the contour and the uniform
error estimate more visible; the underlying argument remains the one Forsyth
gives.
