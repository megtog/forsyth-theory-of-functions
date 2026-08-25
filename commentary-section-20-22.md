# Modern commentary on §§20–22

*This is a modern mathematical commentary on Forsyth's presentation, not a
replacement transcription. See `section-20.md`, `section-21.md`, and
`section-22.md` for the scan-verified text.*

## The modern picture

These three sections contain one of the central chains of reasoning in
elementary complex analysis:

1. A contour integral recovers the value of a holomorphic function at an
   interior point.
2. Differentiating that formula recovers every derivative at the point.
3. Estimating the same integrals bounds all those derivatives by boundary
   values of the function.

In modern notation, if $f$ is holomorphic on a neighborhood of the closed disk

$$
\overline{D(a,r)}=\{z:|z-a|\leq r\},
$$

then

$$
f^{(n)}(a)
=\frac{n!}{2\pi i}
\oint_{|z-a|=r}\frac{f(z)}{(z-a)^{n+1}}\,dz
$$

and consequently

$$
|f^{(n)}(a)|
\leq \frac{n!}{r^n}
\max_{|z-a|=r}|f(z)|.
$$

The first formula says that boundary values determine all local derivatives.
The second says that the distance to the boundary controls how large those
derivatives can be. Together they explain much of the rigidity of holomorphic
functions.

## Section 20: Cauchy's integral formula

For a positively oriented simple closed contour $\gamma$, with $a$ inside it
and $f$ holomorphic on a neighborhood of the contour and its interior,
Cauchy's integral formula is

$$
f(a)=\frac{1}{2\pi i}
\oint_\gamma\frac{f(z)}{z-a}\,dz.
$$

The kernel

$$
\frac{1}{z-a}
$$

is singular at $a$. That singularity is exactly what allows an integral over
the boundary to detect the value at an interior point. If $a$ were outside the
contour, the integrand would be holomorphic throughout the enclosed region
and the integral would instead be zero.

For more general closed curves, a modern statement includes the winding
number:

$$
\frac{1}{2\pi i}
\oint_\gamma\frac{f(z)}{z-a}\,dz
=\operatorname{Ind}(\gamma,a)f(a).
$$

Forsyth works with a positively oriented boundary that winds once around
$a$, so the index is $1$ and does not appear explicitly.

### What the shrinking-circle proof establishes

Forsyth first deforms the outer boundary into a small circle
$|z-a|=\rho$. On that circle,

$$
z-a=\rho e^{i\theta},qquad
\frac{dz}{z-a}=i\,d\theta.
$$

Continuity gives

$$
f(a+\rho e^{i\theta})=f(a)+\epsilon_\rho(\theta),
$$

where

$$
\sup_{0\leq\theta\leq2\pi}
|\epsilon_\rho(\theta)|\longrightarrow0
\qquad(\rho\to0).
$$

Hence

$$
\begin{aligned}
\oint_{|z-a|=\rho}\frac{f(z)}{z-a}\,dz
&=i\int_0^{2\pi}
\bigl(f(a)+\epsilon_\rho(\theta)\bigr)\,d\theta\\
&=2\pi i f(a)+o(1).
\end{aligned}
$$

Contour deformation says that the left-hand side has the same value for
every sufficiently small $\rho$. Since this fixed value tends to
$2\pi i f(a)$ as $\rho\to0$, it must equal $2\pi i f(a)$. This invariance is
the implicit step behind Forsyth's statement that the error becomes zero.

### The mean-value interpretation

After parametrizing a circle, the formula can also be written

$$
f(a)=\frac{1}{2\pi}
\int_0^{2\pi}f(a+re^{i\theta})\,d\theta.
$$

Thus the value of a holomorphic function at the center is the average of its
values on any surrounding circle contained in the domain. Taking real and
imaginary parts gives the mean-value property for harmonic functions. This
connects Cauchy's formula with the potential theory seen in §§10–11.

## Simple poles and residues

Suppose

$$
g(z)=\frac{f(z)}{z-a},
\qquad f(a)\neq0,
$$

with $f$ holomorphic near $a$. Then $g$ has a simple pole at $a$, and

$$
\operatorname{Res}(g,a)
=\lim_{z\to a}(z-a)g(z)
=f(a).
$$

Cauchy's integral formula becomes

$$
\oint_\gamma g(z)\,dz
=2\pi i\operatorname{Res}(g,a).
$$

Forsyth describes the limit but does not yet make “residue” the organizing
term. In current language, his corollary for finitely many simple poles is a
special case of the residue theorem:

$$
\oint_\gamma g(z)\,dz
=2\pi i\sum_{a_k\text{ inside }\gamma}
\operatorname{Res}(g,a_k).
$$

For

$$
G(z)=\prod_{k=1}^n(z-a_k),
$$

where the $a_k$ are distinct, the residue of $f/G$ at $a_k$ is

$$
\operatorname{Res}\left(\frac{f}{G},a_k\right)
=\frac{f(a_k)}{G'(a_k)}.
$$

This explains both Forsyth's partial-fraction identity and the resulting
formula

$$
\oint_\gamma\frac{f(z)}{G(z)}\,dz
=2\pi i\sum_{k=1}^n\frac{f(a_k)}{G'(a_k)}.
$$

The assumption that the roots are distinct matters: if roots coalesce, the
poles have higher order and derivatives enter the residue calculation.

## The exercises in §20

The first exercise is a compact demonstration of coalescing poles. If
$a,b,c$ are distinct, then

$$
\frac{1}{2\pi i}
\oint\frac{f(z)}{(z-a)(z-b)(z-c)}\,dz
=\frac{f(a)}{(a-b)(a-c)}
+\frac{f(b)}{(b-a)(b-c)}
+\frac{f(c)}{(c-a)(c-b)}.
$$

If $b=a$, Cauchy's derivative formula gives

$$
\frac{1}{2\pi i}
\oint\frac{f(z)}{(z-a)^2(z-c)}\,dz
=\left[\frac{d}{dz}\frac{f(z)}{z-c}\right]_{z=a}
=\frac{f'(a)}{a-c}-\frac{f(a)}{(a-c)^2}.
$$

If all three points coincide, the answer is

$$
\frac{1}{2\pi i}
\oint\frac{f(z)}{(z-a)^3}\,dz
=\frac{f''(a)}{2!}.
$$

The second exercise uses contour integration as a coefficient selector. If

$$
f(z)=\sum_{m\geq0}a_mz^m
$$

and $A$ is a chosen set of indices, then

$$
S\left(\frac{\zeta}{z}\right)
=\sum_{n\in A}\left(\frac{\zeta}{z}\right)^n.
$$

In the product

$$
\frac{f(z)}{z}S\left(\frac{\zeta}{z}\right),
$$

the coefficient of $z^{-1}$ is exactly

$$
\sum_{n\in A}a_n\zeta^n.
$$

The contour integral extracts that coefficient. This is an early form of a
general principle: Cauchy integrals can isolate Taylor or Laurent
coefficients.

## Section 21: holomorphic functions are infinitely differentiable

For real functions, differentiability once does not imply differentiability
twice, and even a first derivative need not be continuous. Complex
differentiability is dramatically more rigid. Forsyth proves that if $f$ is
holomorphic, then $f'$ is itself holomorphic; repeating the argument gives
derivatives of every order.

In current terminology,

$$
f\text{ holomorphic}
\quad\Longrightarrow\quad
f\in C^\infty
$$

and, more strongly, $f$ is locally represented by a convergent power series.
The equivalence between holomorphic and complex analytic is one of the
fundamental differences between complex and real analysis.

The condition in Forsyth's opening paragraph that $a$ not be a zero of $f$ is
unnecessary for the derivative formula. Cauchy's formula and all of its
derivative versions remain valid when $f(a)=0$.

### A streamlined modern proof

Choose a fixed contour $\gamma$ enclosing a small closed disk about $a$.
Cauchy's formula gives, for $w$ near $a$,

$$
f(w)=\frac{1}{2\pi i}
\oint_\gamma\frac{f(z)}{z-w}\,dz.
$$

Because $z$ stays on the fixed contour and $w$ stays a positive distance away
from it, the kernel and its derivatives are uniformly bounded. One may
differentiate under the integral sign:

$$
f'(w)=\frac{1}{2\pi i}
\oint_\gamma\frac{f(z)}{(z-w)^2}\,dz.
$$

Repeating the operation gives

$$
f^{(n)}(w)=\frac{n!}{2\pi i}
\oint_\gamma\frac{f(z)}{(z-w)^{n+1}}\,dz.
$$

Forsyth instead expands the difference quotient and estimates the remainder.
His algebra is a direct justification of differentiating under the integral
sign. The important geometric point is that the contour is fixed while $w$
moves in a smaller interior region; therefore denominators such as $z-w$
remain bounded away from zero.

### Interior statements and boundary behavior

The derivative formulas are interior results. If $a$ is inside the domain,
one can draw a small circle around it that remains inside the domain. At a
boundary point this is generally impossible, because complex
differentiability asks about approach from every complex direction.

In modern usage, a function is called holomorphic on an open set. To say it is
holomorphic “at a boundary point” normally means that it extends
holomorphically to an open neighborhood of that point. Mere convergence or
continuity on the boundary does not provide such an extension.

Forsyth's hypergeometric example illustrates another related fact: a power
series may converge at boundary points even though some or all of its
term-by-term differentiated series fail to converge there. On every smaller
closed disk strictly inside the circle of convergence, however, the original
series and every derivative series converge uniformly.

## Higher-order poles in the §21 exercise

The exercise asks for residues when a zero of $G$ creates a pole of higher
order. If $G(a)=0$ and $G'(a)\neq0$, then $F/G^2$ has a double pole. Factoring

$$
G(z)=(z-a)H(z),qquad H(a)=G'(a),
$$

gives

$$
\frac{F(z)}{G(z)^2}
=\frac{F(z)/H(z)^2}{(z-a)^2}.
$$

The residue is the derivative at $a$ of $F/H^2$, which simplifies to the
formula printed by Forsyth:

$$
\operatorname{Res}\left(\frac{F}{G^2},a\right)
=\frac{F'(a)G'(a)-F(a)G''(a)}{G'(a)^3}.
$$

If $a$ is a double zero of $G$, then $F/G$ likewise has a double pole. Expanding
$F$ and $G$ near $a$, or again factoring out $(z-a)^2$, gives

$$
\operatorname{Res}\left(\frac{F}{G},a\right)
=\frac{6F'(a)G''(a)-2F(a)G'''(a)}{3G''(a)^2}.
$$

These are local calculations: a sufficiently small contour excludes every
other zero, and the integral depends only on the coefficient of
$(z-a)^{-1}$ in the Laurent expansion.

## Section 22: Cauchy's estimates

On the circle $|z-a|=r$, let

$$
M_r=\max_{|z-a|=r}|f(z)|.
$$

Applying the ML estimate to Cauchy's derivative formula gives

$$
\begin{aligned}
|f^{(n)}(a)|
&\leq\frac{n!}{2\pi}
\frac{M_r}{r^{n+1}}(2\pi r)\\
&=\frac{n!M_r}{r^n}.
\end{aligned}
$$

These are the **Cauchy estimates**. Modern notation normally uses
$\leq$ rather than the strict inequalities printed by Forsyth. Equality can
occur; for example, with

$$
f(z)=M\left(\frac{z-a}{r}\right)^n,
$$

one has $\max_{|z-a|=r}|f(z)|=M$ and

$$
|f^{(n)}(a)|=\frac{n!M}{r^n}.
$$

The estimates make the role of distance visible. A larger circle on which
$f$ remains controlled produces a stronger derivative bound at its center.

### Some consequences

Cauchy's estimates quickly yield several important theorems.

If $f$ is entire and bounded by $M$ on the whole plane, one may take $r$ as
large as desired. For $n=1$,

$$
|f'(a)|\leq\frac{M}{r}\longrightarrow0,
$$

so $f'(a)=0$ everywhere and $f$ is constant. This is Liouville's theorem.

More generally, if an entire function satisfies

$$
|f(z)|\leq C(1+|z|^m),
$$

then Cauchy's estimates force every derivative of order greater than $m$ to
vanish. Hence $f$ is a polynomial of degree at most $m$.

The same estimates also control Taylor coefficients. If

$$
f(z)=\sum_{n=0}^{\infty}c_n(z-a)^n,
$$

then $c_n=f^{(n)}(a)/n!$, so

$$
|c_n|\leq\frac{M_r}{r^n}.
$$

## Dominant functions and majorant series

Forsyth introduces

$$
\phi(z)=\frac{M}{1-(z-a)/r}
=M\sum_{n=0}^{\infty}\frac{(z-a)^n}{r^n}.
$$

Its Taylor coefficients are the positive numbers $M/r^n$, precisely the
bounds supplied by Cauchy's estimates for the absolute values of the Taylor
coefficients of $f$. In modern terminology, the series for $\phi$ is a
**majorant series** for the series of $f$:

$$
|c_n|\leq\frac{M}{r^n}.
$$

The comparison turns questions about a possibly complicated complex series
into questions about a geometric series with nonnegative coefficients. This
method later became standard in convergence proofs, including proofs about
analytic solutions of differential equations. Forsyth's “dominant function”
and Poincaré's *majorante* belong to this tradition.

The comparison is coefficientwise; it does not mean that
$|f(z)|\leq\phi(z)$ for arbitrary complex $z$. A safer pointwise consequence
inside the circle is

$$
|f(z)|
\leq\sum_{n=0}^{\infty}|c_n|\,|z-a|^n
\leq\frac{M}{1-|z-a|/r}.
$$

## The several-variable formula

Forsyth extends Cauchy's formula to a function of two complex variables. In a
modern polydisc formulation, if $f(z,w)$ is holomorphic near

$$
\overline{D(a,r)}\times\overline{D(b,s)},
$$

then

$$
\frac{\partial^{m+n}f}{\partial z^m\partial w^n}(a,b)
=\frac{m!n!}{(2\pi i)^2}
\oint_{|\zeta-a|=r}\oint_{|\eta-b|=s}
\frac{f(\zeta,\eta)}
{(\zeta-a)^{m+1}(\eta-b)^{n+1}}
\,d\eta\,d\zeta.
$$

The double integral here is an iterated contour integral over the product of
two circles, not an ordinary area integral over a region of the plane. One
applies the one-variable Cauchy formula in one coordinate and then in the
other.

If

$$
M=\max_{substack{|\zeta-a|=r\\|\eta-b|=s}}
|f(\zeta,\eta)|,
$$

the corresponding polydisc estimate is

$$
\left|
\frac{\partial^{m+n}f}{\partial z^m\partial w^n}(a,b)
\right|
\leq\frac{m!n!M}{r^m s^n}.
$$

Forsyth's two-variable dominant function is the product of two geometric
majorants:

$$
\Phi(z,w)
=\frac{M}
{\left(1-(z-a)/r\right)
 \left(1-(w-b)/s\right)}.
$$

Its coefficient of $(z-a)^m(w-b)^n$ is $M/(r^m s^n)$, matching the Cauchy
bound. The same construction extends immediately to any finite number of
complex variables.

## How a modern textbook would organize the material

A present-day text would usually arrange these ideas in the following order:

1. State Cauchy's integral formula, including winding numbers when contours
   are not simple.
2. Interpret a simple pole through its residue and state the residue theorem.
3. Differentiate Cauchy's formula under the integral sign to obtain all
   higher-derivative formulas at once.
4. Conclude that every holomorphic function is infinitely differentiable and
   analytic.
5. Apply the ML estimate to obtain Cauchy's estimates.
6. Use those estimates to prove results such as Liouville's theorem and to
   bound Taylor coefficients.
7. Introduce majorant series when a coefficientwise comparison is useful.
8. Repeat the argument coordinate by coordinate on polydiscs in several
   complex variables.

Forsyth develops the same sequence through contour deformation, explicit
difference quotients, and geometric-series comparison. Modern residue and
majorant terminology makes the common structure more visible: the singular
kernels $(z-a)^{-n-1}$ simultaneously extract values, derivatives, and
Laurent coefficients, while their distance from the contour supplies the
quantitative estimates.
