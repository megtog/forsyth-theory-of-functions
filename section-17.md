# §17. Cauchy's theorem

*Printed pages 27–28 (scans 0055–0056). Mathematical notation has been transcribed as TeX; the wording follows the scans, with line wrapping normalized.*

The following theorem due to Cauchy[^cauchy] can now be proved:—

*If a function $f(z)$ be holomorphic throughout any region of the $z$-plane, then the integral $\int f(z)\,dz$, taken round the whole boundary of that region, is zero.*

We apply the preceding result by assuming

$$
p=f(z),\qquad q=ip=if(z);
$$

owing to the character of $f(z)$, these suppositions are consistent with the conditions under which the lemma is valid. Since $p$ is a function of $z$, we have, at every point of the region,

$$
\frac{\partial p}{\partial x}=\frac1i\frac{\partial p}{\partial y},
$$

and therefore, in the present case,

$$
\frac{\partial q}{\partial x}=i\frac{\partial p}{\partial x}=\frac{\partial p}{\partial y}.
$$

There is no discontinuity or infinity of $p$ or $q$ within the region: hence

$$
\iint\left(\frac{\partial q}{\partial x}-\frac{\partial p}{\partial y}\right)dx\,dy=0,
$$

the integral being extended over the region. Hence also

$$
\int(p\,dx+q\,dy)=0,
$$

when the integral is taken round the whole boundary of the region. But

$$
\begin{aligned}
p\,dx+q\,dy
&=p\,dx+ip\,dy\\
&=p\,dz\\
&=f(z)\,dz,
\end{aligned}
$$

and therefore

$$
\int f(z)\,dz=0,
$$

the integral being taken round the whole boundary of the region within which $f(z)$ is holomorphic.

It should be noted that the theorem requires no limitation on the character of $f(z)$ for points $z$ that are not included in the region.

The result can also be established by a slightly different use of the original theorem. Writing

$$
f(z)=u+iv,
$$

where, after the hypotheses concerning $f(z)$, the real functions $u$ and $v$ are uniform, finite, and continuous for all points within the region or along the boundary, we have

$$
\begin{aligned}
\int f(z)\,dz
&=\int(u+iv)(dx+i\,dy)\\
&=\int(u\,dx-v\,dy)+i\int(v\,dx+u\,dy).
\end{aligned}
$$

Owing to the character of $u$ and $v$, we have

$$
\int(u\,dx-v\,dy)
=\iint\left(-\frac{\partial v}{\partial x}-\frac{\partial u}{\partial y}\right)dx\,dy,
$$

taken over the whole region; but

$$
\frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x},
$$

and therefore

$$
\int(u\,dx-v\,dy)=0.
$$

Similarly

$$
\int(v\,dx+u\,dy)
=\iint\left(\frac{\partial u}{\partial x}-\frac{\partial v}{\partial y}\right)dx\,dy,
$$

taken over the whole region; but

$$
\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},
$$

and therefore

$$
\int(v\,dx+u\,dy)=0.
$$

Hence, with the assumptions made as to $f(z)$, we have

$$
\int f(z)\,dz=0.
$$

Some important propositions can be derived by means of the theorem, as follows.

[^cauchy]: For an account of the gradual development of the theory and, in particular, for a statement of Cauchy's contributions to the theory (with references), see Casorati, *Teorica delle funzioni di variabili complesse*, pp. 64–90, 102–106. The general theory of functions, as developed by Briot and Bouquet in their treatise *Théorie des fonctions elliptiques*, is based upon Cauchy's method.
